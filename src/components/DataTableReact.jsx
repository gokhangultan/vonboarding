import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'İşyeri Kodu',
        selector: row => row.business_code,
        sortable: true,
    },
    {
        name: 'İşyeri Adı',
        selector: row => row.business_name,
        sortable: true,
    },
    {
        name: 'İşyeri Telefon',
        selector: row => row.business_phone,
        sortable: true,
    },
    {
        name: 'İşyeri Vergi Numarası',
        selector: row => row.tax_number,
        sortable: true,
    },
    {
        name: 'Ödeme Kuruluşu',
        selector: row => row.payment_provider,
        sortable: true,
    },
    {
        name: 'Kayıt Tarihi',
        selector: row => row.registration_date,
        sortable: true,
        format: row => new Date(row.registration_date).toLocaleDateString('tr-TR'),
    },
    {
        name: 'İşlem',
        cell: row => <button onClick={() => handleAction(row)}>İşlem</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];

const handleAction = (row) => {
    alert(`İşlem yapıldı: ${row.business_name}`);
};

export const Remote = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const getToken = () => {
        return localStorage.getItem('token'); // Adjust the key if needed
    };

    const fetchUsers = async page => {
        setLoading(true);

        try {
            const response = await axios.post(
                'https://pr.valletbeta3.site/onbV2/onboarding/havuz',
                {
                    // You may need to include request data based on your API requirements
                    draw: 1,
                    start: (page - 1) * perPage,
                    length: perPage,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'WAPP': 'true',
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response);

            const adaptedData = response.data.data.map(user => ({
                id: user.id,
                business_code: `BC${user.id}`,
                business_name: `${user.first_name} ${user.last_name}`,
                business_phone: "555-1234",
                tax_number: `TN${user.id}XYZ`,
                payment_provider: user.email.split("@")[1],
                registration_date: new Date().toISOString(),
            }));

            setData(adaptedData);
            setTotalRows(response.data.total);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        try {
            const response = await axios.post(
                'https://pr.valletbeta3.site/onbV2/onboarding/havuz',
                {
                    draw: 1,
                    start: (page - 1) * newPerPage,
                    length: newPerPage,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'WAPP': 'true',
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response);

            const adaptedData = response.data.data.map(user => ({
                id: user.id,
                business_code: `BC${user.id}`,
                business_name: `${user.first_name} ${user.last_name}`,
                business_phone: "555-1234",
                tax_number: `TN${user.id}XYZ`,
                payment_provider: user.email.split("@")[1],
                registration_date: new Date().toISOString(),
            }));

            setData(adaptedData);
            setPerPage(newPerPage);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(1); // fetch page 1 of users
    }, []);

    return (
        <DataTable
            title="Users"
            columns={columns}
            data={data}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
        />
    );
};

export default Remote;

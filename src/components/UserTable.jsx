import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, DropdownItem } from 'reactstrap';
import NewUserForm from './NewUserForm';
import { fetchUsers } from '../store/actions/FetchUsers';

export default function UserTable(args) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.global.users);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        dispatch(fetchUsers()); 

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const initializeUserTable = () => {
            if (window.$) {
                $('#example2').UserTable();
            }
        };

        const loadScripts = async () => {
            try {
                await loadScript('/assets/libs/prismjs/prism.js');
                await loadScript('/assets/libs/list.js/list.min.js');
                await loadScript('/assets/libs/list.pagination.js/list.pagination.min.js');
                await loadScript('/assets/js/pages/listjs.init.js');
                await loadScript('/assets/libs/sweetalert2/sweetalert2.min.js');
                await loadScript('/assets/js/app.js');
                initializeUserTable();
            } catch (error) {
                console.error('Error loading scripts:', error);
            }
        };

        loadScripts();
    }, [dispatch]);

    return (
        <div className="main-content ">
            <div className="">
                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-lg-12  ">
                            <div className="card dark:bg-secondaryColor bg-primaryColor">
                                <div className="card-header dark:bg-secondaryColor bg-primaryColor">
                                    <h4 className="card-title mb-0 text-textColor">Kullanıcı Yönetimi</h4>
                                </div>
                                <div className="card-body text-textColor dark:text-primaryColor">
                                    <div className="listjs-table" id="customerList">
                                        <div className="row g-4 mb-3">
                                            <div className="col-sm-auto">
                                                <div>
                                                    <Button color="danger" onClick={toggle} className=''>
                                                        Yeni Kullanıcı Ekle
                                                    </Button>
                                                    <Modal isOpen={modal} toggle={toggle} {...args} >
                                                        <ModalHeader toggle={toggle} className='pb-4'>Yeni Kullanıcı Ekle</ModalHeader>
                                                        <hr className='p-2' />

                                                        <ModalBody className='w-100'>
                                                            <NewUserForm />
                                                        </ModalBody>
                                                        <ModalFooter>
                                                        </ModalFooter>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="d-flex justify-content-sm-end">
                                                    <div className="search-box ms-2">
                                                        <input type="text" className="form-control search" placeholder="Search..." />
                                                        <i className="ri-search-line search-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive table-card mt-3 mb-1">
                                            <table className="table align-middle table-nowrap " id="customerTable" >
                                                <thead className="dark:bg-secondaryColor bg-primaryColor ">
                                                    <tr>
                                                        <th scope="col" style={{ width: '50px' }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                                            </div>
                                                        </th>
                                                        <th className="sort" data-sort="customer_name">ID</th>
                                                        <th className="sort" data-sort="email">Email</th>
                                                        <th className="sort" data-sort="phone">Ödeme Kuruluşu</th>
                                                        <th className="sort" data-sort="status">Tipi</th>
                                                        <th className="sort" data-sort="date">Joining Date</th>
                                                        <th className="sort" data-sort="action">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    {users.length > 0 ? users.map((user, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" name="chk_child" value={`option${index}`} />
                                                                </div>
                                                            </th>
                                                            <td className="customer_name">{user.name}</td>
                                                            <td className="email">{user.email}</td>
                                                            <td className="phone">{user.phone}</td>
                                                            <td className="date">{user.joiningDate}</td>
                                                            <td className="status">
                                                                <span className={`badge bg-${user.status === 'Active' ? 'success-subtle text-success' : 'danger-subtle text-danger'} text-uppercase`}>
                                                                    {user.status}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex gap-2">
                                                                    <div className="edit">
                                                                        <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                                                    </div>
                                                                    <div className="remove">
                                                                        <button className="btn btn-sm btn-danger remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )) : (
                                                        <tr>
                                                            <td colSpan="7" className="text-center">No users found</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                            <div className="noresult" style={{ display: users.length === 0 ? 'block' : 'none' }}>
                                                <div className="text-center">
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <div className="pagination-wrap hstack gap-2">
                                                <a className="page-item pagination-prev disabled" href="#">
                                                    Previous
                                                </a>
                                                <ul className="pagination listjs-pagination mb-0"></ul>
                                                <a className="page-item pagination-next" href="#">
                                                    Next
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    );
}

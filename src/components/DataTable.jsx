import React, { useEffect, useState } from 'react';
import NewOrganizationForm from './NewOrganizationForm'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export default function DataTable(args) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    useEffect(() => {
        const loadScript = (src) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        };

        loadScript('/assets/libs/jquery/jquery.min.js');
        loadScript('/assets/libs/bootstrap/js/bootstrap.bundle.min.js');
        loadScript('/assets/libs/datatables/jquery.dataTables.min.js');
        loadScript('/assets/libs/datatables/dataTables.bootstrap4.min.js');
        loadScript('/assets/libs/swiper/swiper-bundle.min.js');


        const initializeDataTable = () => {
            $(document).ready(function() {
                $('#example').DataTable();
            });
        };

        loadScript('/assets/js/app.js', initializeDataTable);
    }, []);

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="alert alert-danger" role="alert">
                        This is <strong>Datatable</strong> page in which we have used <b>jQuery</b> with CDN link!
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                            <div className='px-4 pt-2'>
                                                    <Button color="danger" onClick={toggle}>
                                                        Yeni İşyeri Ekle
                                                    </Button>
                                                    <Modal isOpen={modal} toggle={toggle} {...args}>
                                                        <ModalHeader toggle={toggle}>Yeni İşyeri Ekle</ModalHeader>
                                                        <ModalBody>
                                                            <NewOrganizationForm />
                                                        </ModalBody>
                                                        <ModalFooter>
                                                        </ModalFooter>
                                                    </Modal>
                                                </div>
                                <div className="card-body">
                                    <table id="example" className="table table-bordered dt-responsive nowrap table-striped align-middle" style={{ width: '100%' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: '10px' }}>
                                                    <div className="form-check">
                                                        <input className="form-check-input fs-15" type="checkbox" id="checkAll" value="option" />
                                                    </div>
                                                </th>
                                                <th data-ordering="false">SR No.</th>
                                                <th data-ordering="false">ID</th>
                                                <th data-ordering="false">Purchase ID</th>
                                                <th data-ordering="false">Title</th>
                                                <th data-ordering="false">User</th>
                                                <th>Assigned To</th>
                                                <th>Created By</th>
                                                <th>Create Date</th>
                                                <th>Status</th>
                                                <th>Priority</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>VLZ-452</td>
                                                <td>Symox v1.0.0</td>
                                                <td><a href="#!">Add Dynamic Contact List</a></td>
                                                <td>RH Nichols</td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-3.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>03 Oct, 2021</td>
                                                <td><span className="badge bg-info-subtle text-info">Re-open</span></td>
                                                <td><span className="badge bg-danger">High</span></td>
                                            </tr>
                                           
                                            <tr>
                                                <td>VLZ-455</td>
                                                <td>Dorsin - Landing Page</td>
                                                <td><a href="#!">Apologize for shopping Error!</a></td>
                                                <td>Tonya Noble</td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-6.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                            
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-7.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>14 June, 2021</td>
                                                <td><span className="badge bg-warning-subtle text-warning">Inprogress</span></td>
                                                <td><span className="badge bg-info">Medium</span></td>
                                            </tr>
                                            <tr>
                                                <td>VLZ-456</td>
                                                <td>Minimal - v2.1.0</td>
                                                <td><a href="#!">Support for theme</a></td>
                                                <td>Donald Palmer</td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-2.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>25 June, 2021</td>
                                                <td><span className="badge bg-danger-subtle text-danger">Closed</span></td>
                                                <td><span className="badge bg-success">Low</span></td>
                                            </tr>
                                            <tr>
                                                <td>VLZ-457</td>
                                                <td>Dason - v1.0.0</td>
                                                <td><a href="#!">Benner design for FB & Twitter</a></td>
                                                <td>Jennifer Carter</td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-5.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                            
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-6.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-6.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                            
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-7.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-7.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                            
                                                        <a href="javascript: void(0);" className="avatar-group-item" data-img="avatar-8.jpg" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Username">
                                                            <img src="assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>14 Aug, 2021</td>
                                                <td><span className="badge bg-warning-subtle text-warning">Inprogress</span></td>
                                                <td><span className="badge bg-info">Medium</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default function Notification() {
    return (
        <div className="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
        <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
            <i className='bx bx-bell fs-22'></i>
            <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span className="visually-hidden">unread messages</span></span>
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
            <div className="dropdown-head bg-primary bg-pattern rounded-top">
                <div className="p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <h6 className="m-0 fs-16 fw-semibold text-white"> Bildirimler </h6>
                        </div>
                        <div className="col-auto dropdown-tabs">
                            <span className="badge bg-light-subtle text-body fs-13"> 1 Yeni</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="tab-content position-relative" id="notificationItemsTabContent">
                <div className="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                    <div className="text-reset notification-item d-block dropdown-item position-relative">
                        <div className="d-flex">
                         <div className="avatar-xs me-3 flex-shrink-0">
                            <span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                <i className='bx bx-message-square-dots'></i>
                            </span>
                        </div>
                        <div className="flex-grow-1">
                            <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">Bildirim Başlık</h6>
                            </a>
                            <div className="fs-13 text-muted">
                                <p className="mb-1">Bildirim Açıklama</p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i className="mdi mdi-clock-outline"></i> 13 Dakika Önce</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-3 text-center view-all">
                    <button type="button" className="btn btn-soft-success waves-effect waves-light">Tümü
                        Okundu İşaretle <i className="ri-arrow-right-line align-middle"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div> 
        
    );
  }
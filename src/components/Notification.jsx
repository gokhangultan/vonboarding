
export default function Notification() {
    return (
        <div class="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
        <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
            <i class='bx bx-bell fs-22'></i>
            <span class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span class="visually-hidden">unread messages</span></span>
        </button>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
            <div class="dropdown-head bg-primary bg-pattern rounded-top">
                <div class="p-3">
                    <div class="row align-items-center">
                        <div class="col">
                            <h6 class="m-0 fs-16 fw-semibold text-white"> Bildirimler </h6>
                        </div>
                        <div class="col-auto dropdown-tabs">
                            <span class="badge bg-light-subtle text-body fs-13"> 1 Yeni</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="tab-content position-relative" id="notificationItemsTabContent">
                <div class="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                    <div class="text-reset notification-item d-block dropdown-item position-relative">
                        <div class="d-flex">
                         <div class="avatar-xs me-3 flex-shrink-0">
                            <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                <i class='bx bx-message-square-dots'></i>
                            </span>
                        </div>
                        <div class="flex-grow-1">
                            <a href="#!" class="stretched-link">
                                <h6 class="mt-0 mb-1 fs-13 fw-semibold">Bildirim Başlık</h6>
                            </a>
                            <div class="fs-13 text-muted">
                                <p class="mb-1">Bildirim Açıklama</p>
                            </div>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span><i class="mdi mdi-clock-outline"></i> 13 Dakika Önce</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="my-3 text-center view-all">
                    <button type="button" class="btn btn-soft-success waves-effect waves-light">Tümü
                        Okundu İşaretle <i class="ri-arrow-right-line align-middle"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div> 
        
    );
  }
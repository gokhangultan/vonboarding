


export default function UserDetail() {
    return (
        <div className="dropdown ms-sm-3 header-item topbar-user">
        <button type="button" className="btn shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="d-flex align-items-center">
                <img className="rounded-circle header-profile-user" src="src/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                <span className="text-start ms-xl-2">
                    <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Görkem Bayramoğlu</span>
                    <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">KLON Ödeme Kuruluşu A.Ş</span>
                </span>
            </span>
        </button>
        <div className="dropdown-menu dropdown-menu-end">
            <h6 className="dropdown-header">Merhaba Görkem</h6>
            <a className="dropdown-item" href="profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profilim</span></a>
            <a className="dropdown-item" href="last-activity.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Son İşlemlerim</span></a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="users.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Kullanıcı Yönetimi</span></a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="password-change.html"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Şifremi Değiştir</span></a>
            <a className="dropdown-item" href="logout.html"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Çıkış Yap</span></a>
        </div>
        </div>
    );
  }
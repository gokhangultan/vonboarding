


export default function UserDetail() {
    return (
        <div class="dropdown ms-sm-3 header-item topbar-user">
        <button type="button" class="btn shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="d-flex align-items-center">
                <img class="rounded-circle header-profile-user" src="src/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                <span class="text-start ms-xl-2">
                    <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Görkem Bayramoğlu</span>
                    <span class="d-none d-xl-block ms-1 fs-12 user-name-sub-text">KLON Ödeme Kuruluşu A.Ş</span>
                </span>
            </span>
        </button>
        <div class="dropdown-menu dropdown-menu-end">
            <h6 class="dropdown-header">Merhaba Görkem</h6>
            <a class="dropdown-item" href="profile.html"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Profilim</span></a>
            <a class="dropdown-item" href="last-activity.html"><i class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Son İşlemlerim</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="users.html"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Kullanıcı Yönetimi</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="password-change.html"><i class="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Şifremi Değiştir</span></a>
            <a class="dropdown-item" href="logout.html"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Çıkış Yap</span></a>
        </div>
        </div>
    );
  }
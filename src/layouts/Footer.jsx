export default function Footer() {
    return (
      <footer className="footer">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-sm-6">
                          © <script>document.write(new Date().getFullYear())</script> VALLET ÖDEME VE FİNANSAL TEKNOLOJİ ANONİM ŞİRKETİ Tüm Hakları Saklıdır.
                      </div>
                      <div className="col-sm-6">
                          <div className="text-sm-end d-none d-sm-block">
                              Project Owner <img src="src/assets/images/vallet.png" className="h-4" />
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
    );
  }
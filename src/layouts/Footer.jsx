export default function Footer() {
    return (
      <footer class="footer">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-sm-6">
                          © <script>document.write(new Date().getFullYear())</script> VALLET ÖDEME VE FİNANSAL TEKNOLOJİ ANONİM ŞİRKETİ Tüm Hakları Saklıdır.
                      </div>
                      <div class="col-sm-6">
                          <div class="text-sm-end d-none d-sm-block">
                              Project Owner <img src="src/assets/images/vallet.png" className="h-4" />
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
    );
  }
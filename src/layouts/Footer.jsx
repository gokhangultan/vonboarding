export default function Footer() {
    return (
      <footer className="footer dark:bg-secondaryColor bg-primaryColor">
              <div className="">
                  <div className=" flex gap-3 justify-between items-center align-middle">
                      <div className="flex-[1_1_33.3%]">
                          © <script>document.write(new Date().getFullYear())</script> VALLET ÖDEME VE FİNANSAL TEKNOLOJİ ANONİM ŞİRKETİ Tüm Hakları Saklıdır.
                      </div>
                      <img src="src/assets/images/vallet.png" className="w-24 " />
                          <div className="text-sm-end d-none d-sm-block flex-[1_1_33.3%]">
                              Project Owner 
                          </div>
                  </div>
              </div>
          </footer>
    );
  }
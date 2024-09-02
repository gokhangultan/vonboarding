import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/reducers/AuthReducer";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from "reactstrap";
import {  toast } from 'react-toastify';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [smsToken, setSmsToken] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }

  const onSubmit = async (data) => {
    try {
      const hashedPassword = await sha256(data.password);

      const payload = {
        email: data.email,
        password: hashedPassword,
      };

      const response = await axios.post(
        "https://pr.valletbeta3.site/onbV2/login",
        payload,
        { headers: { WEBAPP: "true" } }
      );

      if (response.data.status === "success") {
        setSmsToken(response.data.data.smsToken);
        toast.success(response.data.message);
        setModal(true);
      } else {
        toast.error(response.data.message);
      }

      dispatch(loginUser(response.data));
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  const handleVerification = async () => {
    try {
      const headers = {
        SMSTOKEN: smsToken,
        WEBAPP: "true", 
      };

      const payload = {
        dogrulamaKodu: verificationCode,
      };

      const response = await axios.post(
        "https://pr.valletbeta3.site/onbV2/login/sms-validate",
        payload,
        { headers }
      );

      if (response.data.status === "success") {
        toast.success(response.data.message);
        dispatch(loginUser({ ...response.data, token: response.data.data.token }));
        localStorage.setItem('authToken', response.data.data.token);
        setTimeout(() => {
          window.location.href = `/${response.data.data.redirect}`;
        }, 5000); 
      } else {
        toast.error(response.data.message);
      }

      setModal(false);
    } catch (error) {
      console.error("Verification Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-page-wrapper pt-5">
      <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div className="bg-overlay"></div>

        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1440 120"
          >
            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
          </svg>
        </div>
      </div>

      <div className="auth-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 mb-4 text-white-50">
                <div>
                  <Link to="/" className="d-inline-block auth-logo">
                    <img src="assets/images/logo-light.png" alt="" height="20" />
                  </Link>
                </div>
                <p className="mt-3 fs-15 fw-medium">Vonboarding is a product of Vallet</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card mt-4 card-bg-fill">
                <div className="card-body p-4">
                  <div className="p-2 mt-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                      <div className="mb-3">
                        <label htmlFor="useremail" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                          type="email"
                          placeholder="Email *"
                          className="form-input form-control"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm leading-7">Lütfen Geçerli Bir Mail Adresi Giriniz.</span>
                        )}
                        <div className="invalid-feedback">Please enter email</div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password-input">
                          Password
                        </label>
                        <div className="position-relative auth-pass-inputgroup">
                          <input
                            {...register("password", {
                              required: true,
                              minLength: 6,
                            })}
                            type="password"
                            placeholder="Şifre *"
                            className="p-2 bg-gray-100 rounded-lg form-control"
                          />
                          {errors.password && (
                            <span className="text-red-500 text-sm leading-7">Şifreniz en az 6 karakter olmalıdır.</span>
                          )}
                          <div className="invalid-feedback">Please enter password</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-success w-100" type="submit">
                          Giriş Yap
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>SMS Doğrulama</ModalHeader>
        <ModalBody className="p-4">
          <Input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="6 Haneli Kod"
            maxLength={6}
          />
        </ModalBody>
        <ModalFooter className="p-4 flex justify-center">
          <Button color="primary" onClick={handleVerification}>
            Doğrula
          </Button>{" "}
          <Button color="secondary" onClick={() => setModal(false)}>
            İptal
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

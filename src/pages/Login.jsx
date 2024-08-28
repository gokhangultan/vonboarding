import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  const {
 register,
 handleSubmit,
 formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
 try {
   const response = await axios.post('/your-endpoint', data);
   console.log('Response:', response.data);


 } catch (error) {
   console.error('Error:', error);
 }
  };

 return (
   <div class="auth-page-wrapper pt-5">
   <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
 <div class="bg-overlay"></div>

 <div class="shape">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
<path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
  </svg>
 </div>
   </div>

   <div class="auth-page-content">
 <div class="container">
  <div class="row">
<div class="col-lg-12">
 <div class="text-center mt-sm-5 mb-4 text-white-50">
  <div>
   <Link to="/" class="d-inline-block auth-logo">
    <img src="assets/images/logo-light.png" alt="" height="20" />
   </Link>
  </div>
  <p className="mt-3 fs-15 fw-medium">Vonboarding is a product of Vallet</p>
  </div>
</div>
  </div>

  <div class="row justify-content-center">
<div class="col-md-8 col-lg-6 col-xl-5">
 <div class="card mt-4 card-bg-fill">

  <div class="card-body p-4">
   
   <div class="p-2 mt-4">
    < form onSubmit={handleSubmit(onSubmit)} class="needs-validation" novalidate action="index.html">

  <div class="mb-3">
   <label for="useremail" class="form-label">Email <span class="text-danger">*</span></label>
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
    <span className="text-red-500 text-sm leading-7">
      Lütfen Geçerli Bir Mail Adresi Giriniz.{" "}
    </span>
     )}   <div class="invalid-feedback">
 Please enter email
   </div>
  </div>
  <div class="mb-3">
   <label class="form-label" for="password-input">Password</label>
   <div class="position-relative auth-pass-inputgroup">
 <input
  {...register("password", {
    required: true,
    minLength: 6,
  })}
  type="password"
  placeholder="Şifre * "
  className="p-2 bg-gray-100 rounded-lg form-control"
   />
   {errors.password && (
  <span className="text-red-500 text-sm leading-7">
    Şifreniz en az 6 karakter olmalıdır.
  </span>
   )}
 <div class="invalid-feedback">
  Please enter password
 </div>
   </div>
  </div>
  <div class="mt-4">
   <button class="btn btn-success w-100" type="submit">Giriş Yap</button>
  </div>
    </form>
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
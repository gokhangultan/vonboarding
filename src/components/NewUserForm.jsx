import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../store/actions/RoleActions";

export default function NewUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/your-endpoint", data);
      console.log("Response:", response.data);

      dispatch(addUser(response.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex gap-2 justify-center  ">
        <div className="flex flex-col gap-3 justify-between ">
          <div className="">
            <select
              {...register("paymentInstitution", { required: true })}
              className="p-2 w-100 bg-gray-100 rounded-lg"
            >
              <option value="">Ödeme Kuruluşu Seçiniz</option>
              <option value="Kuruluş1">Kuruluş 1</option>
              <option value="Kuruluş2">Kuruluş 2</option>
              <option value="Kuruluş3">Kuruluş 3</option>
            </select>
            {errors.paymentInstitution && (
              <span className="text-red-500 text-sm leading-7">
                Ödeme Kuruluşu Seçilmesi Zorunludur
              </span>
            )}
          </div>

          <div>
            <select
              {...register("department", { required: true })}
              className="p-2 w-100 bg-gray-100 rounded-lg"
            >
              <option value="">Departman Seçiniz</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
            {errors.department && (
              <span className="text-red-500 text-sm leading-7">
                Departman Seçilmesi Zorunludur
              </span>
            )}
          </div>
          <div>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="email"
              placeholder="Mail Adresi"
              className="p-2 bg-gray-100 rounded-lg"
            />
            {errors.email && (
              <span className="text-red-500 text-sm leading-7">
                Geçerli bir e-posta adresi giriniz.
              </span>
            )}
          </div>

          <div>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              type="password"
              placeholder="Şifre"
              className="p-2 bg-gray-100 rounded-lg"
            />
            {errors.password && (
              <span className="text-red-500 text-sm leading-7">
                Şifreniz en az 6 karakter olmalıdır.
              </span>
            )}
          </div>
          <div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Adı"
              className="p-2 bg-gray-100 rounded-lg"
            />
            {errors.name && (
              <span className="text-red-500 text-sm leading-7">
                Ad Alanı Zorunludur
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <div>
            <select
              {...register("userType", { required: true })}
              className="p-2 w-100 bg-gray-100 rounded-lg"
            >
              <option value="">Kullanıcı Tipi Seçiniz</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            {errors.userType && (
              <span className="text-red-500 text-sm leading-7">
                Kullanıcı Tipi Seçilmesi Zorunludur
              </span>
            )}
          </div>

          <div>
            <input
              {...register("gsm", {
                required: true,
                pattern: /^(\+90|0)?\d{10}$/,
              })}
              type="text"
              placeholder="GSM No"
              className="p-2 w-100 bg-gray-100 rounded-lg"
            />
            {errors.gsm && (
              <span className="text-red-500 text-sm leading-7">
                Lütfen geçerli bir GSM numarası giriniz. "+90- XXX XXX XX XX"
              </span>
            )}
          </div>

          <div>
            <select
              {...register("smsVerification", { required: true })}
              className="p-2 bg-gray-100 rounded-lg"
            >
              <option value="">SMS Doğrulama Açık Olsun mu?</option>
              <option value="Evet">Evet</option>
              <option value="Hayır">Hayır</option>
            </select>
            {errors.smsVerification && (
              <span className="text-red-500 text-sm leading-7">
                SMS Doğrulama Seçilmesi Zorunludur
              </span>
            )}
          </div>
          <div>
            <input
              {...register("passwordRepeat", {
                required: true,
                validate: (value) => value === getValues("password"),
              })}
              type="password"
              placeholder="Şifre Tekrar"
              className="p-2 w-100 bg-gray-100 rounded-lg"
            />
            {errors.passwordRepeat && (
              <span className="text-red-500 text-sm leading-7">
                Şifreler eşleşmiyor.
              </span>
            )}
          </div>

          <div>
            <input
              {...register("surname", { required: true })}
              type="text"
              placeholder="Soyadı"
              className="p-2 w-100 bg-gray-100 rounded-lg"
            />
            {errors.surname && (
              <span className="text-red-500 text-sm leading-7">
                SoyAd Alanı Zorunludur
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <Button color="primary" type="submit" onSubmit={onSubmit}>
          Kullanıcıyı Kaydet
        </Button>
      </div>
    </form>
  );
}

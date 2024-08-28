import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addUser } from '../store/actions/RoleActions';

export default function NewUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch(); 

  const toggle = () => setModal(!modal);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/your-endpoint', data);
      console.log('Response:', response.data);

      dispatch(addUser(response.data));

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Adı "
        className="p-2 bg-gray-100 rounded-lg"
      />
      {errors.name && (
        <span className="text-red-500 text-sm leading-7">
          Ad Alanı Zorunludur
        </span>
      )}
      <input
        {...register("surname", { required: true })}
        type="text"
        placeholder="Soyadı"
        className="p-2 bg-gray-100 rounded-lg"
      />
      {errors.surname && (
        <span className="text-red-500 text-sm leading-7">
          SoyAd Alanı Zorunludur
        </span>
      )}
      <input
        {...register("phone", {
          required: true,
          pattern: /^(\+90|0)?\d{10}$/,
        })}
        type="text"
        placeholder="Telefon * (___)_______"
        className="p-2 bg-gray-100 rounded-lg"
      />
      {errors.phone && (
        <span className="text-red-500 text-sm leading-7">
          Lütfen Geçerli Bir telefon numarası giriniz. "+90- XXX XXX XX XX"
        </span>
      )}
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Kullanıcı Adı "
        className="p-2 bg-gray-100 rounded-lg"
      />
      {errors.username && (
        <span className="text-red-500 text-sm leading-7">
          Kullanıcı Ad Alanı Zorunludur
        </span>
      )}
      <input
        {...register("password", {
          required: true,
          minLength: 6,
        })}
        type="password"
        placeholder="Şifre * "
        className="p-2 bg-gray-100 rounded-lg"
      />
      {errors.password && (
        <span className="text-red-500 text-sm leading-7">
          Şifreniz en az 6 karakter olmalıdır.
        </span>
      )}
      <div className="flex justify-center p-2">
        <Button color="primary" type="submit">
          Kullanıcıyı Kaydet
        </Button>
      </div>
    </form>
  );
}

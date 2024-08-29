import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateUserPassword } from '../store/reducers/AuthReducer';

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch(); 

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/your-endpoint', data);
      console.log('Response:', response.data);

      dispatch(updateUserPassword(response.data));

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="dark:bg-white bg-primaryColor p-4">
      <div className="main-content ">
        
        <div className="container">
        <h4 className="card-title mb-0 text-textColor">Kullanıcı Yönetimi</h4>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-2 w-[60%]">
            <input
              {...register("currentPassword", { required: true })}
              type="password"
              placeholder="Mevcut Şifreniz"
              className="p-3 bg-gray-100 rounded-lg"
            />
            {errors.currentPassword && (
              <span className="text-red-500 text-sm leading-7">
                Mevcut şifrenizi giriniz.
              </span>
            )}

            <input
              {...register("newPassword", {
                required: true,
                minLength: 6,
              })}
              type="password"
              placeholder="Yeni Şifreniz"
              className="p-3 bg-gray-100 rounded-lg"
            />
            {errors.newPassword && (
              <span className="text-red-500 text-sm leading-7">
                Yeni şifreniz en az 6 karakter olmalıdır.
              </span>
            )}

            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("newPassword"),
              })}
              type="password"
              placeholder="Yeni Şifreniz Tekrar"
              className="p-3 bg-gray-100 rounded-lg"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm leading-7">
                Şifreler eşleşmiyor.
              </span>
            )}

            <div className="flex justify-center p-2">
              <Button color="primary" type="submit">
                Kaydet
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

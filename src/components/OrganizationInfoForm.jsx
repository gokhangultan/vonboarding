import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addOrganization } from '../store/actions/RoleActions';

export default function OrganizationInfoForm() {
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

      dispatch(addOrganization(response.data));

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="dark:bg-white bg-primaryColor p-4">
      <div className="">
        <div className="">
          <h4 className="card-title mb-4 text-textColor">Onbardin Düzenle</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex gap-3 justify-between">
            <input
              {...register("workplaceCode", { required: true })}
              type="text"
              placeholder="İşyeri Kodu"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <select
              {...register("notification", { required: true })}
              className="p-3 w-100 bg-gray-100 rounded-lg"
            >
              <option value="">İşyerine Bildirim Yapılsın mı?</option>
              <option value="yes">Evet</option>
              <option value="no">Hayır</option>
            </select>
            <input
              {...register("posid", { required: true })}
              type="text"
              placeholder="POS ID"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            </div>
            <hr className="my-4" />

            <h4 className="card-title mb-4 text-textColor">Şirket Bilgileri</h4>


            <div className="flex gap-3 justify-between">
            <input
              {...register("companyName", { required: true })}
              type="text"
              placeholder="Şirket Adı"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <input
              {...register("ibanNo", { required: true })}
              type="text"
              placeholder="Şirket IBAN No"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <input
              {...register("ibanAdSoyad", { required: true })}
              type="text"
              placeholder="Şirket IBAN Ad Soyad"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <input
              {...register("ticariSicilNo", { required: true })}
              type="text"
              placeholder="Şirket Ticari Sicil No"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            </div>
            <div className="flex gap-3 justify-between">
            <input
              {...register("postaKodu", { required: true })}
              type="text"
              placeholder="Posta Kodu"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <select
              {...register("sehir", { required: true })}
              className="p-3 w-100 bg-gray-100 rounded-lg"
            >
              <option value="">Şirket Şehri</option>
              <option value="sehir1">Şehir 1</option>
              <option value="sehir2">Şehir 2</option>
              {/* Şehir seçenekleri */}
            </select>
            <select
              {...register("ilce", { required: true })}
              className="p-3 w-100 bg-gray-100 rounded-lg"
            >
              <option value="">Şirket İlçesi</option>
              <option value="ilce1">İlçe 1</option>
              <option value="ilce2">İlçe 2</option>
              {/* İlçe seçenekleri */}
            </select>
            <select
              {...register("vergiDairesi", { required: true })}
              className="p-3 w-100 bg-gray-100 rounded-lg"
            >
              <option value="">Şirket Vergi Dairesi</option>
              <option value="vd1">Vergi Dairesi 1</option>
              <option value="vd2">Vergi Dairesi 2</option>
              {/* Vergi dairesi seçenekleri */}
            </select>
            </div>
            <div className="flex gap-3 justify-between">
            <input
              {...register("vergiNo", { required: true })}
              type="text"
              placeholder="Şirket Vergi No"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <input
              {...register("naceKodu", { required: true })}
              type="text"
              placeholder="Şirket NACE Kodu"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <input
              {...register("website", { required: true })}
              type="text"
              placeholder="Şirket Web Sitesi"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            <input
              {...register("gsmNo", { required: true })}
              type="text"
              placeholder="Şirket GSM No"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            />
            </div>
            <div className="flex gap-3 ">
            <input
              {...register("mccKodu", { required: true })}
              type="text"
              placeholder="MCC Kodu"
              className="p-3 w-[24%] bg-gray-100 rounded-lg"
            />
            <select
              {...register("companyNotification", { required: true })}
              className="p-3 w-[24%] bg-gray-100 rounded-lg"
            >
              <option value="">İşyerine Bildirim Yapılsın mı?</option>
              <option value="yes">Evet</option>
              <option value="no">Hayır</option>
            </select>
            </div>
            <textarea
              {...register("description", { required: false })}
              placeholder="Açıklama"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            ></textarea>
            <textarea
              {...register("address", { required: true })}
              type="text"
              placeholder="Address"
              className="p-3 w-100 bg-gray-100 rounded-lg"
            ></textarea>

           
          </form>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addOrganization } from '../store/actions/RoleActions';
import OrganizationInfoForm from "./OrganizationInfoForm";

export default function NewOrganizationForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const dispatch = useDispatch(); 

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
    <div className="main-content ">
      
      <div className="container">
      <h4 className="card-title mb-2 text-textColor">Onboarding Düzenle</h4>
      <div>
      <form onSubmit={handleSubmit(onSubmit)} >
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
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Şirket Bilgileri</AccordionHeader>
          <AccordionBody accordionId="1">
          <div className="dark:bg-white bg-primaryColor p-4">
      <div className="">
        <div className="">
            <div className="flex flex-col gap-4">
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

</div>
         
        </div>
      </div>
    </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
                  <AccordionHeader targetId="2">Şirket Yetkili Bilgileri</AccordionHeader>
                  <AccordionBody accordionId="2">
                    <div className="flex flex-col gap-4">
                    <div className="flex gap-3 justify-between">
                      <input
                        {...register("sirketYetkilisiAd", { required: true })}
                        type="text"
                        placeholder="Yetkili Adı"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                      <input
                        {...register("sirketYetkilisiSoyad", { required: true })}
                        type="text"
                        placeholder="Yetkili Soyadı"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                      <input
                        {...register("sirketYetkilisiEmail", { required: true })}
                        type="email"
                        placeholder="Yetkili Email Adresi"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                      <input
                        {...register("sirketYetkilisiTelefon", { required: true })}
                        type="text"
                        placeholder="Yetkili Telefon Numarası"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                    </div>
                    <div className="flex gap-3 justify-between">
                      
                      <input
                        {...register("sirketYetkilisiTc", { required: true })}
                        type="text"
                        placeholder="Yetkili TC No"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                      <input
                        {...register("sirketYetkilisiDogumTarihi", { required: true })}
                        type="date"
                        placeholder="Yetkili Doğum Tarihi"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                    <select
                        {...register("sirketYetkilisiTipi", { required: true })}
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      >
                        <option value="">Yetkili Tipi</option>
                        <option value="tip1">Tip 1</option>
                        <option value="tip2">Tip 2</option>
                      </select>
                    </div>
                    
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">Şirket Ortağı Bilgileri</AccordionHeader>
                  <AccordionBody accordionId="3">
                    <div className="flex flex-col gap-4">
                    <div className="flex gap-3 justify-between">
                      <input
                        {...register("sirketOrtagiAd", { required: true })}
                        type="text"
                        placeholder="Ortak Adı"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                      <input
                        {...register("sirketOrtagiSoyad", { required: true })}
                        type="text"
                        placeholder="Ortak Soyadı"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                      <input
                        {...register("sirketOrtagiEmail", { required: true })}
                        type="email"
                        placeholder="Ortak Email Adresi"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                       <input
                        {...register("sirketOrtagiTelefon", { required: true })}
                        type="text"
                        placeholder="Ortak Telefon Numarası"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                    </div>
                    <div className="flex gap-3 justify-between">
                     
                      <input
                        {...register("sirketOrtagiTc", { required: true })}
                        type="text"
                        placeholder="Ortak TC No"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                      <input
                        {...register("sirketOrtagiDogumTarihi", { required: true })}
                        type="date"
                        placeholder="Ortak Doğum Tarihi"
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      />
                       <textarea
                      {...register("sirketOrtagiAdresi", { required: true })}
                      placeholder="Ortak Adresi"
                      className="p-3 w-100 bg-gray-100 rounded-lg"
                    ></textarea>
                    </div>
                   
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="4">Kullanılacak Özellikler</AccordionHeader>
                  <AccordionBody accordionId="4">
                    <div className="flex flex-col gap-4">
                    <div className="flex gap-3 justify-between">
                      <select
                        {...register("sanalPos", { required: true })}
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      >
                        <option value="">Sanal POS Kullanılabilsin mi?</option>
                        <option value="evet">Evet</option>
                        <option value="hayir">Hayır</option>
                      </select>
                      <select
                        {...register("mobilOdeme", { required: true })}
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      >
                        <option value="">Mobil Ödeme Kullanılabilsin mi?</option>
                        <option value="evet">Evet</option>
                        <option value="hayir">Hayır</option>
                      </select>
                      <select
                        {...register("fizikselPos", { required: true })}
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      >
                        <option value="">Fiziksel POS Kullanılabilsin mi?</option>
                        <option value="evet">Evet</option>
                        <option value="hayir">Hayır</option>
                      </select>
                      <select
                        {...register("softPos", { required: true })}
                        className="p-3 w-100 bg-gray-100 rounded-lg"
                      >
                        <option value="">Soft POS Kullanılabilsin mi?</option>
                        <option value="evet">Evet</option>
                        <option value="hayir">Hayır</option>
                      </select>
                    </div>
                    <div className="flex gap-3 justify-between">
                      
                      <select
                        {...register("paraTransferApi", { required: true })}
                        className="p-3 w-[24%] bg-gray-100 rounded-lg"
                      >
                        <option value="">Para Transfer API Kullanılabilsin mi?</option>
                        <option value="evet">Evet</option>
                        <option value="hayir">Hayır</option>
                      </select>
                    </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
              <Button type="submit" className="mt-4">
                Kaydet
              </Button>
              </form>
    </div>
    
    </div>
    </div></div>
  );
}

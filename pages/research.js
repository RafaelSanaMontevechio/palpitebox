import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Research = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0,
  });
  const notas = [0, 1, 2, 3, 4, 5];
  const [success, setsuccess] = useState(false);
  const [response, setResponse] = useState({});

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setsuccess(true);
      setResponse(data);
      console.log(data);
    } catch (error) {}
  };

  const onChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  return (
    <div className="pt-8">
      <PageTitle title="Pesquisa" />
      <h1 className="text-center font-bold my-4text-2xl">
        Criticas e Sugestões
      </h1>
      <p className="text-center mb-6">
        Sempre em busca de melhor atender aos nossos clientes, estamos sempre
        abertos a ouvir a sua opinião
      </p>

      {!success && (
        <div className="w-1/5 mx-auto">
          <label className="font-bold">Seu nome:</label>
          <input
            className="block bg-blue-100 p-2 shadow my-2 rounded"
            type="text"
            placeholder="Nome"
            onChange={onChange}
            name="Nome"
            value={form.Nome}
          />
          <label className="font-bold">E-mail:</label>
          <input
            className="block bg-blue-100 p-2 shadow my-2 rounded"
            type="email"
            placeholder="E-mail"
            onChange={onChange}
            name="Email"
            value={form.Email}
          />
          <label className="font-bold">Whatsapp:</label>
          <input
            className="block bg-blue-100 p-2 shadow my-2 rounded"
            type="text"
            placeholder="Whatsapp"
            onChange={onChange}
            name="Whatsapp"
            value={form.Whatsapp}
          />
          <label className="font-bold">Nota:</label>
          <div className="flex py-6">
            {notas.map((nota) => {
              return (
                <label className="block w-1/6 text-center">
                  {nota}
                  <br />
                  <input
                    type="radio"
                    name="Nota"
                    value={nota}
                    onChange={onChange}
                  />
                </label>
              );
            })}
          </div>
          <button
            className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow mb-4"
            onClick={save}
          >
            Salvar
          </button>
        </div>
      )}
      {success && (
        <div className="w-1/5 mx-auto">
          <p className=" mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center">
            Obrigado por sua sugestão ou crítica
          </p>
          {response.showCoupon && (
            <div className="text-center border p-4 mb-4">
              Seu cupom: <br />
              <span className="font-bold text-2xl"> {response.Cupom}</span>
            </div>
          )}
          {response.showCoupon && (
            <div className="text-center border p-4 mb-6 ">
              <span className="font-bold block mb-2"> {response.Promo}</span>
              <br />
              <span className="italic">
                Tire um print ou uma foto desta tela.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Research;

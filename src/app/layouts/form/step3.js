import "./steps.css";

export default function Step3({
  formControl,
  setFormControl,
  completion3,
  setCompletion3,
  step,
}) {
  function validateStep3() {
    const street = document.querySelector("input[name=street]").value;
    const number = document.querySelector("input[name=number]").value;
    const cep = document.querySelector("input[name=cep]").value;
    const city = document.querySelector("input[name=city]").value;
    const state = document.querySelector("input[name=state]").value;
    const country = document.querySelector("input[name=country]").value;

    if (street.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O nome da rua não pode estar vazio",
          step: 3,
        }),
        setCompletion3(false)
      );
    }

    if (number.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O número da casa não pode estar vazio",
          step: 3,
        }),
        setCompletion3(false)
      );
    }

    if (cep.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O número do CEP não pode estar vazio",
          step: 3,
        }),
        setCompletion3(false)
      );
    }
    if (city.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O nome da cidade não pode estar vazio",
          step: 3,
        }),
        setCompletion3(false)
      );
    }
    if (state.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O nome do estado não pode estar vazio",
          step: 3,
        }),
        setCompletion3(false)
      );
    }
    if (country.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O nome do país não pode estar vazio",
          step: 3,
        }),
        setCompletion3(false)
      );
    }

    return (
      setFormControl({ ...formControl, error: false }), setCompletion3(true)
    );
  }

  function Feedback() {
    if (step !== 3) {
      return null;
    }

    if (!completion3) {
      return (
        <div>
          <br />
          <img src="/Exclamation.png" alt="Error" id="exclamation" />
        </div>
      );
    } else {
      return (
        <div>
          <img src="/Ok.png" alt="Error" id="ok" />
        </div>
      );
    }
  }

  return (
    <div>
      <br />

      <input
        type="text"
        name="street"
        placeholder="Nome da Rua"
        onChange={validateStep3}
      />
      <input
        type="number"
        name="number"
        placeholder="Número da Casa"
        onChange={validateStep3}
      />
      <input type="text" name="complement" placeholder="Complemento/Apto" />
      <input type="text" name="neighbourhood" placeholder="Bairro" />
      <input
        type="text"
        name="cep"
        placeholder="CEP"
        onChange={validateStep3}
      />
      <input
        type="text"
        name="city"
        placeholder="Cidade"
        onChange={validateStep3}
      />
      <input
        type="text"
        name="state"
        placeholder="Estado"
        onChange={validateStep3}
      />
      <input
        type="text"
        name="country"
        placeholder="País"
        onChange={validateStep3}
      />

      {formControl.error && formControl.step == 3 && (
        <div>
          <h5>{formControl.message}</h5>
        </div>
      )}

      <div className="feedback">
        <Feedback />
      </div>
    </div>
  );
}

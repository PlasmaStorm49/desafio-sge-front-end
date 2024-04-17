import "./steps.css";

export default function Step2({
  formControl,
  setFormControl,
  completion2,
  setCompletion2,
  step,
}) {
  function validateStep2() {
    const name = document.querySelector("input[name=name]").value;
    const surname = document.querySelector("input[name=surname]").value;

    if (name.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O nome não pode estar vazio",
          step: 2,
        }),
        setCompletion2(false)
      );
    }

    if (surname.length < 1) {
      return (
        setFormControl({
          error: true,
          message: "O sobrenome não pode estar vazio",
          step: 2,
        }),
        setCompletion2(false)
      );
    }

    return (
      setFormControl({ ...formControl, error: false }),
      setCompletion2(true)
    );
  }

  function Feedback() {
    if (step !== 2) {
      return null;
    }

    if (!completion2) {
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
        name="name"
        placeholder="Nome"
        onChange={validateStep2}
      />
      <input
        type="text"
        name="surname"
        placeholder="Sobrenome"
        onChange={validateStep2}
      />
      <input type="date" name="datebirth" placeholder="Data de Nascimento" />

      {formControl.error && formControl.step === 2 && (
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

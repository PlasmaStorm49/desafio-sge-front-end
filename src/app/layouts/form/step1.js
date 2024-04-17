import "./steps.css";

export default function Step1({
  formControl,
  setFormControl,
  completion1,
  setCompletion1,
  step,
}) {
  function validateStep1() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const email = document.querySelector("input[name=email]").value;
    const password = document.querySelector("input[name=password]").value;
    const confirmPassword = document.querySelector(
      "input[name=confirm_password]"
    ).value;

    if (!email.match(pattern)) {
      return (
        setFormControl({
          error: true,
          message: "O e-mail não está na formatação correta (aaa@bbb.cc)",
          step: 1,
        }),
        setCompletion1(false)
      );
    }

    if (password.length <= 5) {
      return (
        setFormControl({
          error: true,
          message: "A senha tem menos de 5 caracteres",
          step: 1,
        }),
        setCompletion1(false)
      );
    }

    if (confirmPassword !== password) {
      return (
        setFormControl({
          error: true,
          message: "As senhas estão diferentes",
          step: 1,
        }),
        setCompletion1(false)
      );
    }

    return (
      setFormControl({ ...formControl, error: false }), setCompletion1(true)
    );
  }

  function Feedback() {
    if (step !== 1) {
      return null;
    }

    if (!completion1) {
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
        id="inputemail"
        type="email"
        name="email"
        placeholder="Email"
        onChange={validateStep1}
      />
      <input
        id="inputsenha"
        type="password"
        name="password"
        placeholder="Senha"
        onChange={validateStep1}
      />
      <input
        id="inputconfirmasenha"
        type="password"
        name="confirm_password"
        placeholder="Confirmação de Senha"
        onChange={validateStep1}
      />

      {formControl.error && formControl.step === 1 && (
        <div id="errorMsg">
          <h5>{formControl.message}</h5>
        </div>
      )}

      <div className="feedback">
        <Feedback />
      </div>
    </div>
  );
}

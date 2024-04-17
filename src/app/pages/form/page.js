"use client";
import { useState } from "react";
import Step1 from "../../layouts/form/step1.js";
import Step2 from "../../layouts/form/step2.js";
import Step3 from "../../layouts/form/step3.js";
import TopMenu from "../../layouts/menu.js";
import { Dialog } from "primereact/dialog";
import "./page.css";

export default function Form() {
  const [completion1, setCompletion1] = useState(false);
  const [completion2, setCompletion2] = useState(false);
  const [completion3, setCompletion3] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formError, setFormError] = useState(false);
  const [step, setStep] = useState(1);

  const [formControl, setFormControl] = useState({
    error: true,
    message: "",
    step: 1,
  });

  function onSubmit(e) {
    e.preventDefault();
    if (formControl.error) {
      return setFormError(true);
    }
    e.target.reset();
    setCompletion1(false);
    setCompletion2(false);
    setCompletion3(false);
    return setFormSubmitted(true);
  }

  function changePage() {
    step == 1 ? setStep(2) : step == 2 ? setStep(3) : setStep(1);
  }

  return (
    <div>
      <TopMenu />
      <div className="steps" id="steps">
        <ul className="nav">
          <li
            className="selector-step1"
            style={step == 1 ? { background: "#c985e0" } : {}}
            onClick={() => {
              setStep(1);
            }}
            key="keystep1"
          >
            Etapa 1
          </li>
          <li
            className="selector-step2"
            style={step == 2 ? { background: "#c985e0" } : {}}
            onClick={() => {
              setStep(2);
            }}
            key="keystep2"
          >
            Etapa 2
          </li>
          <li
            className="selector-step3"
            style={step == 3 ? { background: "#c985e0" } : {}}
            onClick={() => {
              setStep(3);
            }}
            key="keyetapa3"
          >
            Etapa 3
          </li>
        </ul>
        <div className="content">
          <form onSubmit={onSubmit}> 
            <div className="form">
              <div
                className="step1"
                style={step == 1 ? { display: "block" } : { display: "none" }}
              >
                <Step1
                  formControl={formControl}
                  setFormControl={setFormControl}
                  completion1={completion1}
                  setCompletion1={setCompletion1}
                  step={step}
                />
              </div>

              <div
                className="step2"
                style={step == 2 ? { display: "block" } : { display: "none" }}
              >
                <Step2
                  formControl={formControl}
                  setFormControl={setFormControl}
                  completion2={completion2}
                  setCompletion2={setCompletion2}
                  step={step}
                />
              </div>

              <div
                className="step3"
                style={step == 3 ? { display: "block" } : { display: "none" }}
              >
                <Step3
                  formControl={formControl}
                  setFormControl={setFormControl}
                  completion3={completion3}
                  setCompletion3={setCompletion3}
                  step={step}
                />
              </div>

              {formSubmitted && (
                <div className="modal-overlay">
                  <Dialog
                    className="modal"
                    header="Sucesso"
                    visible={formSubmitted}
                    onHide={() => setFormSubmitted(false)}
                  >
                    <br />
                    <br />
                    <p>O Cadastro foi Concluído com Sucesso!</p>
                  </Dialog>
                </div>
              )}

              {formError && (
                <div className="modal-overlay">
                  <Dialog
                    className="modal"
                    header="Erro!"
                    visible={formError}
                    onHide={() => setFormError(false)}
                  >
                    <br />
                    <br />
                    <p>Existe um erro de cadastro no formulário!</p>
                  </Dialog>
                </div>
              )}

              <button
                type="submit"
                className="submit"
                id="submit"
                disabled={!completion1 || !completion2 || !completion3}
              >
                Enviar
              </button>
              <button
                type="button"
                className="next"
                id="next"
                onClick={changePage}
              >
                Avançar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

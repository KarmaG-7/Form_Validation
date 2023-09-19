import React from "react";
import { styled } from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "../Schema/Schema";
function Form() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_Password: "",
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <MainForm>
      <div className="form-details">
        <div className="input-container">
          <h3>Welcome</h3>
          <p>Let's Join KarmaCart, Shall We?</p>

          <form onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>

            <div className="input-block">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>

            <div className="input-block">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>

            <div className="input-block">
              <label htmlFor="confirm_Password" className="input-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_Password"
                name="confirm_Password"
                placeholder="Confirm Password"
                value={values.confirm_Password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_Password && touched.confirm_Password ? (
                <p className="form-error">{errors.confirm_Password}</p>
              ) : null}
            </div>

            <button type="submit">Register</button>
          </form>
        </div>

        <div className="pic">
          <img
            src="https://us.123rf.com/450wm/9dreamstudio/9dreamstudio1805/9dreamstudio180502367/102045688-template-for-social-media-links-hand-lettering-join-us-on-work-desk-with-glasses-coffee-plant-on.jpg?ver=6"
            alt="join-us"
          />
        </div>
      </div>
    </MainForm>
  );
}

const MainForm = styled.section`
  margin: 5rem auto;
  background-color: white;
  width: 70%;
  border-radius: 1rem;
  font-family: "Work Sans", sans-serif;

  .form-details {
    display: grid;
    grid-template-columns: 1fr 1.3fr;

    .input-container {
      padding: 2rem;

      .input-block {
        display: flex;
        border: 1px solid #ddd;
        border-radius: 0.3rem;
        margin-bottom: 1.5rem;
        flex-direction: column;
        padding: 10px;
        transition: 0.3s;
        &:focus-within {
          border-color: #8c7569;
          .input-label {
            color: rgba(140, 117, 105, 0.8);
          }
        }

        .input-label {
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.7px;
          color: rgb(167, 49, 33);
          transition: 0.3s;
        }
        input {
          height: 1rem;
          width: 18rem;
          border: 0;
          outline: 0;
          padding: 3px 0;
          &::placeholder {
            color: #ccc;
          }
        }

        .form-error {
          color: rgb(197, 22, 5);
        }
      }

      button {
        width: 5rem;
        height: 2.5rem;
        border: none;
        border-radius: 0.3rem;
        background-color: rgb(247, 140, 162);
        color: white;
        cursor: pointer;
        &:hover {
          transform: scale(0.96);
        }
      }
    }
    .pic img {
      height: 100%;
      width: 100%;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
`;
export default Form;

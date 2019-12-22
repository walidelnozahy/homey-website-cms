import styled from "styled-components";
import i18n from "i18next";
import company from "../../_company/company";
export const FormWrapper = styled.div`
      background-color: ${company.colorPrimary};
      padding: 20px;
      margin-top: 10px;
      form {
        .ant-form-item {
          background-color: #fff;
          padding: 2px;
          border-radius: ${
            i18n.language === "ar" || i18n.language === "pr"
              ? `5px 5px 25px 5px `
              : `5px 5px 5px 25px`
          };
          max-width: 100%;
          input {
            
            border: none;
            transition: all .3s ease-in-out;
          }
          .ant-input-group-addon {
            border: none;
            
            background: none;
            p {
              margin: auto;
              
              font-size: 16px;
              color: ${company.colorPrimary};
            }
          }
         
          &:hover {
            input {
              border: 0.5px solid ${company.colorPrimary};
              border: radius: 5px;
            }
          }
        }
         
        .submitBtnItem {
          margin: auto;
          text-align: center;
          button {
            width: 170px;
            background-color: #fff;
            padding: 5px 10px;
            border-radius: 5px 5px 5px 15px;
            color: ${company.colorPrimary};
            height: 35px;
            span {
              font-size: 18px;
              font-weight: 100;
            }
          }
        }
      }
    `;
export const ContactFormWrapper = styled.div`
  max-width: ${props => (props.full ? `100%` : `80%`)};
  margin: auto;
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 20px;
  border: 2px solid blue;
  border-radius: 8px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: aqua;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`; 
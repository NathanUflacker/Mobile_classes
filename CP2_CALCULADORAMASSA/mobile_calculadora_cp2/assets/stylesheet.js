import { StyleSheet } from "react-native";

const BGC_COLOR = '#36454F';
const BGC_INPUT_COLOR = '#C0C0C0';
const BOR_INPUT_COLOR = '#E5E4E2';
const TITLE_COLOR = '#40E0D0';
const BTN_CALC_COLOR = '#191970';
const BTN_CLEAR_COLOR = '#C41E3A';
const BTN_TXT_COLOR = '#fff';
const RST_CONT_COLOR = '#dfe6fd';
const RST_TXT_COLOR = '#222';
const LABLE_COLOR = '#40B5AD';


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: BGC_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 175,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TITLE_COLOR,
    marginBottom: 25,
  },
  form: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: LABLE_COLOR,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: BOR_INPUT_COLOR,
    borderRadius: 10,
    padding: 10,
    backgroundColor: BGC_INPUT_COLOR,
    fontSize: 16,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  picker: {
    borderWidth: 1,
    borderColor: BOR_INPUT_COLOR,
    borderRadius: 10,
    backgroundColor: BGC_INPUT_COLOR,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: BTN_CALC_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  clearButton: {
    backgroundColor: BTN_CLEAR_COLOR,
  },
  buttonText: {
    color: BTN_TXT_COLOR,
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: RST_CONT_COLOR,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: RST_TXT_COLOR,
  },
});
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import dayjs from 'dayjs';
import { DatePickerSelector } from './component/datePickerSelector/datePickerSelector';
import { DatePickerCalendar } from './component/datePickerCalender/datePickerCalendar';


test('renders the App component', () => {
  render(<App />);
  const titleElement = screen.getByText(/Picked Date:/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders DatePickerSelector with the correct initial shownDate', () => {
  const initialShownDate = dayjs('2023-08-18');
  const { getByText } = render(
    <DatePickerSelector shownDate={initialShownDate} setShownDate={() => {}} />
  );
  const dateText = getByText(initialShownDate.format('MMMM YYYY'));
  expect(dateText).toBeInTheDocument();
});

test('selects a date when clicked', () => {
  const shownDate = dayjs('2023-08-01'); 
  const selectedDate = dayjs('2023-08-18'); 
  const onChange = jest.fn(); 
  const { getByText } = render(
    <DatePickerCalendar
      shownDate={shownDate}
      selectedDate={selectedDate}
      onChange={onChange}
    />
  );
  const targetDate = getByText('15'); 
  fireEvent.click(targetDate);
  expect(onChange).toHaveBeenCalledWith(dayjs('2023-08-15')); 
});

test('highlights the selected date', () => {
  const shownDate = dayjs('2023-08-01');
  const selectedDate = dayjs('2023-08-18'); 
  const { getByText } = render(
    <DatePickerCalendar
      shownDate={shownDate}
      selectedDate={selectedDate}
      onChange={() => {}}
    />
  );
  const targetDate = getByText('18'); 
  expect(targetDate).toHaveClass('DatePickerCalendar__dayCell_selected'); 
});





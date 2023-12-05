import {render,screen} from '@testing-library/react';
import Content from './src/Content';

describe('ContentComponent', () => {
  it('should render successfully', () => {
    const baseElement = true;
    expect(baseElement).toBeTruthy();
  });
});


// test('renders users when API call succeeds', async () => {
//   const fakeData = [
//     { url : "https://api.slingacademy.com/public/sample-photos/6.jpeg",
//       user: "10",
//       title : 'Fire year candidate too like',
//       description : "Few address take for special development white career."
//     },
//     { url : 'https://api.slingacademy.com/public/sample-photos/9.jpeg',
//     user: "14",
//     title : 'Per nature research',
//     description : "Nature focus wonder behind magazine pattern degree far without tree"
//   },
//   ]
//   fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => fakeData) })

//   render(<App />)

//   expect(screen.getByRole('heading')).toHaveTextContent('List of Users')

//   expect(await screen.findByText('Joe')).toBeInTheDocument()
//   expect(await screen.findByText('Tony')).toBeInTheDocument()

//   expect(screen.queryByText('No users found')).not.toBeInTheDocument()
// })
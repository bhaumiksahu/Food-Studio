import { render,screen,fireEvent } from "@testing-library/react";
import Header from "../Header";
import Cart from "../Cart"
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"
test("hello",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});

test("hello",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Cart/>
            </Provider>
        </BrowserRouter>
    );
    const cart=screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
});
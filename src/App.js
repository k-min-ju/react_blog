import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/invoices">Invoices1</Link> |{" "}
                <Link to="/expenses">Expenses2</Link>
            </nav>
            <Outlet/>
        </div>
    );
}
import logo from "../assets/img/logo.jpeg"

export default function Header() {

    return (
        <>
          <header className="p-3">
            <div className="d-flex justify-content-between">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
          </header>
        </>
    )
}
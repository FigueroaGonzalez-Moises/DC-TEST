import { useGoogleLogin } from "react-google-login";
import { setAccessToken } from "../../accessToken";
import { checkAuth } from "../../CheckAuth";
import { useLoginMutation } from "../../generated/graphql";
import "../../css/navbar.scss";
import { useEffect, useState } from "react";
import M from "materialize-css";
import Logo from "./Logo";
import anime from "animejs";

const Navbar = () => {
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        if (
            window.location.href.split("/")[
                window.location.href.split("/").length - 1
            ] !== "products"
        ) {
            try {
                document
                    .getElementById("navbar")!
                    .classList.remove("nav-default");

                document.getElementById("navbar")!.style.backgroundColor =
                    "#000000";

                document
                    .getElementById("navbar")!
                    .classList.add("nav-scrolled");
            } catch {}
        } else if (window.innerWidth > 1250) {
            if (!animation) {
                setAnimation(true);
                anime
                    .timeline({})
                    .add({
                        targets: ".brand-logo",
                        translateY: [-50, 0],
                        translateZ: 0,
                        opacity: [0, 1],
                        easing: "easeOutExpo",
                        duration: 500,
                    })
                    .add(
                        {
                            targets: "nav ul li",
                            translateY: [-50, 0],
                            translateZ: 0,
                            opacity: [0, 1],
                            easing: "easeOutExpo",
                            duration: 800,
                            delay: (el, i) => 300 + 30 * i,
                        },
                        100
                    );
            }

            window.onscroll = () => {
                try {
                    if (
                        !document
                            .getElementById("navbar")!
                            .classList.contains("nav-scrolled")
                    ) {
                        document
                            .getElementById("navbar")!
                            .classList.remove("nav-default");
                        anime({
                            targets: "#navbar",
                            background: "#000000",
                            complete: () => {
                                setTimeout(() => {
                                    document
                                        .getElementById("navbar")!
                                        .classList.add("nav-scrolled");
                                }, 100);
                            },
                        });
                    }
                } catch {}
            };
        }
    }, [animation, setAnimation]);

    const [login] = useLoginMutation();

    const handler = async res => {
        let response = await login({
            variables: {
                user_id: res.googleId,
                email: res.profileObj.email,
            },
        });

        setAccessToken(response.data?.login.accessToken!);
        localStorage.setItem("iru5", response.data?.login.refreshToken!);
        window.location.reload();
    };

    const { signIn } = useGoogleLogin({
        clientId:
            "36358700157-4ihpf9tj4bjf4k346b8pnubt4meim4j0.apps.googleusercontent.com",
        onSuccess: handler,
    });

    const logout = () => {
        localStorage.setItem("iru5", "");
        setAccessToken("");
        window.location.reload();
    };

    const closeMobileSidenav = () => {
        console.log("test");
        let sidenav = document.getElementById("mobile-sidenav")!;

        sidenav.classList.remove("opened");
        sidenav.style.transform = "translateX(-100%)";
        document.body.classList.remove("stop-scrolling");
        anime
            .timeline({
                duration: 500,
            })
            .add({
                targets: "#close-icon",
                opacity: 0,
                complete: () => {
                    document
                        .getElementById("close-icon")!
                        .classList.add("hide");
                    document.getElementById("menu")!.classList.remove("hide");
                },
            })
            .add({
                targets: "#menu",
                opacity: 1,
            });
    };
    return (
        <>
            <div id="mobile-sidenav">
                <ul className="container">
                    <li onClick={() => closeMobileSidenav()}>
                        <a href="#/products">Products</a>
                    </li>
                    <li>
                        {checkAuth() ? (
                            <a href="#/my-orders">My Orders</a>
                        ) : (
                            // eslint-disable-next-line
                            <a
                                onClick={() => {
                                    signIn();
                                }}
                            >
                                My Orders
                            </a>
                        )}
                    </li>

                    {checkAuth() ? (
                        <li onClick={() => closeMobileSidenav()}>
                            <a href="#/" onClick={() => logout()}>
                                Logout
                            </a>
                        </li>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>

            <nav id="navbar" className="z-depth-0 nav-default">
                <i
                    className="material-icons noselect show-on-small hide-on-med-and-up"
                    id="menu"
                    style={{
                        maxWidth: "50px",
                        display: "inline-block",
                        marginLeft: "15px",
                    }}
                    onClick={() => {
                        try {
                            let sidenav =
                                document.getElementById("mobile-sidenav")!;

                            sidenav.classList.add("opened");
                            sidenav.style.transform = "translateX(0)";
                            document.body.classList.add("stop-scrolling");
                            anime
                                .timeline({
                                    duration: 500,
                                })
                                .add({
                                    targets: "#menu",
                                    opacity: 0,
                                    complete: () => {
                                        document
                                            .getElementById("menu")!
                                            .classList.add("hide");
                                        document
                                            .getElementById("close-icon")!
                                            .classList.remove("hide");
                                    },
                                })
                                .add({
                                    targets: "#close-icon",
                                    opacity: 1,
                                });
                        } catch {}
                    }}
                >
                    menu
                </i>

                <i
                    id="close-icon"
                    style={{
                        maxWidth: "50px",
                        opacity: 0,
                        marginLeft: "15px",
                    }}
                    onClick={() => closeMobileSidenav()}
                    className="material-icons hide noselect show-on-small hide-on-med-and-up"
                >
                    close
                </i>
                <Logo />
                <a href="#/my-cart">
                    <i
                        className="material-icons noselect show-on-small hide-on-med-and-up"
                        id="cart"
                        style={{
                            maxWidth: "50px",
                            display: "inline-block",
                            marginRight: "15px",
                        }}
                    >
                        shopping_cart
                    </i>
                </a>

                <ul
                    className=" noselect"
                    id="nav"
                    style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        position: "absolute",
                    }}
                >
                    <li
                        onClick={() => {
                            try {
                                document
                                    .getElementById("navbar")!
                                    .classList.remove("nav-default");
                                document
                                    .getElementById("navbar")!
                                    .classList.add("nav-scrolled");
                                anime({
                                    targets: "nav",
                                    background: "#000000",
                                    duration: 500,
                                    easing: "linear",
                                });
                            } catch {}
                        }}
                    >
                        <a href="#/products">PRODUCTS</a>
                    </li>

                    <li
                        onClick={() => {
                            try {
                                document
                                    .getElementById("navbar")!
                                    .classList.remove("nav-default");
                                document
                                    .getElementById("navbar")!
                                    .classList.add("nav-scrolled");
                                anime({
                                    targets: "nav",
                                    background: "#000000",
                                    duration: 500,
                                    easing: "linear",
                                });
                            } catch {}
                        }}
                    >
                        {checkAuth() ? (
                            <a href="#/my-orders">MY ORDERS</a>
                        ) : (
                            // eslint-disable-next-line
                            <a
                                onClick={async () => {
                                    await signIn();
                                }}
                            >
                                MY ORDERS
                            </a>
                        )}
                    </li>

                    <li
                        onClick={() => {
                            try {
                                document
                                    .getElementById("navbar")!
                                    .classList.remove("nav-default");
                                document
                                    .getElementById("navbar")!
                                    .classList.add("nav-scrolled");
                                setTimeout(() => {}, 0);
                                // anime({
                                //     targets: "nav",
                                //     background: "#000000",
                                //     duration: 500,
                                //     easing: "linear",
                                // });
                            } catch {}
                        }}
                    >
                        <a href="#/my-cart">CART</a>
                    </li>

                    {checkAuth() ? (
                        <li
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <i
                                id="desktop-logout"
                                className="material-icons right noselect"
                                style={{
                                    marginRight: "15%",
                                }}
                                onClick={() => logout()}
                            >
                                exit_to_app
                            </i>
                        </li>
                    ) : (
                        <></>
                    )}
                </ul>
            </nav>
        </>
    );
};

const SavedNavbar = () => {
    useEffect(() => {
        var elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
    });

    const [login] = useLoginMutation();

    const handler = async res => {
        let response = await login({
            variables: {
                user_id: res.googleId,
                email: res.profileObj.email,
            },
        });

        setAccessToken(response.data?.login.accessToken!);
        localStorage.setItem("iru5", response.data?.login.refreshToken!);
        window.location.reload();
    };

    const { signIn } = useGoogleLogin({
        clientId:
            "767129492168-gloagc4m640fgeegm6if58heehkpup7d.apps.googleusercontent.com",
        onSuccess: handler,
    });

    const logout = () => {
        localStorage.setItem("iru5", "");
        setAccessToken("");
        window.location.reload();
    };

    return (
        <>
            <header>
                <div style={{ zIndex: 4 }} className="noselect">
                    <nav className="z-depth-2">
                        <div className="nav-wrapper">
                            <Logo />

                            <a
                                href="#/"
                                data-target="mobile-demo"
                                className="sidenav-trigger left"
                            >
                                <i className="material-icons noselect">menu</i>
                            </a>

                            <ul
                                id="nav"
                                className="center"
                                style={{
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    position: "absolute",
                                }}
                            >
                                <li>
                                    <a href="#/products">PRODUCTS</a>
                                </li>

                                <li>
                                    {checkAuth() ? (
                                        <a href="#/my-orders">MY ORDERS</a>
                                    ) : (
                                        // eslint-disable-next-line
                                        <a
                                            onClick={async () => {
                                                await signIn();
                                            }}
                                        >
                                            MY ORDERS
                                        </a>
                                    )}
                                </li>

                                <li>
                                    <a href="#/my-cart">CART</a>
                                </li>
                            </ul>
                            {checkAuth() ? (
                                <i
                                    id="desktop-logout"
                                    className="material-icons right noselect"
                                    style={{ marginRight: "15%" }}
                                    onClick={() => logout()}
                                >
                                    exit_to_app
                                </i>
                            ) : (
                                <></>
                            )}
                            <a
                                href="#/my-cart"
                                className="right white-text"
                                style={{ color: "#000", marginRight: "18px" }}
                            >
                                <i className="material-icons" id="mobile-cart">
                                    shopping_cart
                                </i>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <ul
                className="sidenav"
                id="mobile-demo"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.95)",
                    paddingTop: "42px",
                }}
            >
                <li>
                    <a
                        style={{ color: "#fff", textAlign: "center" }}
                        href="#/products"
                    >
                        Products
                    </a>
                </li>
                <li>
                    {checkAuth() ? (
                        <a
                            style={{ color: "#fff", textAlign: "center" }}
                            href="#/my-orders"
                        >
                            My Orders
                        </a>
                    ) : (
                        // eslint-disable-next-line
                        <a
                            style={{ color: "#fff", textAlign: "center" }}
                            onClick={() => {
                                signIn();
                            }}
                        >
                            My Orders
                        </a>
                    )}
                </li>

                <li>
                    {checkAuth() ? (
                        <a
                            href="#/"
                            style={{ color: "#fff", textAlign: "center" }}
                            onClick={() => logout()}
                        >
                            Logout
                        </a>
                    ) : (
                        <></>
                    )}
                </li>
            </ul> */}
        </>
    );
};

export default Navbar;

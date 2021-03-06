import { Redirect } from "react-router";
import {
    useGetProductQuery,
    useGetProductsOptionsQuery,
} from "../../generated/graphql";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/actions/userAction";
import { useEffect, useState } from "react";
import anime from "animejs";

const GetProductOptions = () => {
    var product_id;
    if (process.env.NODE_ENV === "production") {
        product_id = Number(window.location.href.split(":")[2]);
    } else {
        product_id = Number(window.location.href.split(":")[3]);
    }

    const { data, loading } = useGetProductsOptionsQuery({
        variables: {
            product_id,
        },
    });

    let odata = data,
        oloading = loading;

    return {
        odata,
        oloading,
    };
};

const ProductDetails = () => {
    let product_id: number;
    if (process.env.NODE_ENV === "production") {
        product_id = Number(window.location.href.split(":")[2]);
    } else {
        product_id = Number(window.location.href.split(":")[3]);
    }

    const dispatch = useDispatch();
    const { odata, oloading } = GetProductOptions();
    const { data, loading, error } = useGetProductQuery({
        variables: {
            product_id,
        },
    });

    const [option, setOption] = useState({
        name: "",
        option_id: 0,
        option_price: 0,
        option_stock: 0,
    });

    useEffect(() => {
        var elems = document.querySelectorAll(".tooltipped");
        M.Tooltip.init(elems);
        elems = document.querySelectorAll(".carousel");
        M.Carousel.init(elems);

        elems = document.querySelectorAll(".dropdown-trigger");
        M.Dropdown.init(elems);

        if (!loading) {
            elems = document.querySelectorAll(".tooltipped");
            M.Tooltip.init(elems);
            elems = document.querySelectorAll(".carousel");
            M.Carousel.init(elems);

            elems = document.querySelectorAll(".dropdown-trigger");
            M.Dropdown.init(elems);
            if (!!data && !!document.getElementById("product-desc")) {
                document.getElementById("product-desc")!.innerHTML =
                    data.getProduct.desc;
                document.getElementById("product-desc-m")!.innerHTML =
                    data.getProduct.desc;
            }
            // (stock * 100)/ org_stock
            let percent = 50;
            if (!data || !data!.getProduct.org_stock) {
                percent = 100;
            } else {
                if (option.option_stock !== 0) {
                    percent =
                        (option.option_stock * 100) /
                        data!.getProduct.org_stock;
                } else {
                    percent =
                        (data!.getProduct.stock * 100) /
                        data!.getProduct.org_stock;
                }

                if (percent > 100) {
                    percent = 100;
                }
            }

            anime({
                targets: ".filler",
                width: ["0%", `${percent}%`],
                easing: "easeInOutExpo",
            });

            if (!document.getElementById("product-img")) {
            } else {
                if (data?.getProduct.stock === 0) {
                    document.getElementById("product-img")!.style.opacity =
                        "0.7";
                }
            }
        }
    });

    if (loading || oloading) {
        return <></>;
    }

    if (!data || error || !odata) {
        return <Redirect to="/products" />;
    }

    let product: any = data!.getProduct;

    // setTimeout(() => {
    //     var instance = M.Carousel.getInstance(
    //         document.getElementById("carousel-1")!
    //     );
    //     instance.next();
    // }, 5000);

    return (
        <div style={{ marginTop: "95px" }}>
            <h2 className="center-align">{product.name}</h2>
            <h6 className="center-align">
                {product.stock === 0 ? (
                    <span style={{ color: "#ff0000", fontWeight: "bold" }}>
                        SOLD OUT
                    </span>
                ) : (
                    <>
                        {odata.getProductsOptions.length === 0 ? (
                            <>${Number(product.price / 100).toFixed(2)} </>
                        ) : (
                            <>
                                {option.option_price ? (
                                    <span
                                        className="option-price-id"
                                        id="option-price-id"
                                    >
                                        $
                                        {Number(
                                            option.option_price / 100
                                        ).toFixed(2)}{" "}
                                    </span>
                                ) : (
                                    <span style={{ opacity: 0 }}>$0.00</span>
                                )}
                            </>
                        )}
                    </>
                )}
            </h6>

            <div className="row noselect">
                <div
                    className="col s10 offset-s1 m4 offset-m2"
                    style={{ display: "flex", justifyContent: "end" }}
                >
                    {data.getProduct.images!.length > 1 ? (
                        <>
                            <div
                                id="carousel-1"
                                className="carousel carousel-slider hide-on-small-only"
                            >
                                {!data.getProduct.images ? (
                                    <></>
                                ) : (
                                    <>
                                        {data.getProduct.images.map(
                                            (_val, i) => {
                                                return (
                                                    // eslint-disable-next-line
                                                    <a
                                                        className="carousel-item noselect"
                                                        key={i}
                                                    >
                                                        <span
                                                            style={{
                                                                display:
                                                                    "inline-block",
                                                                maxHeight:
                                                                    "350px",
                                                                height: "100%",
                                                                width: "12.5%",
                                                            }}
                                                            onClick={() => {
                                                                var instance =
                                                                    M.Carousel.getInstance(
                                                                        document.getElementById(
                                                                            "carousel-1"
                                                                        )!
                                                                    );
                                                                instance.prev();
                                                            }}
                                                        ></span>

                                                        <img
                                                            alt="product"
                                                            style={{
                                                                maxHeight:
                                                                    "350px",
                                                                width: "75%",
                                                            }}
                                                            src={
                                                                product.images[
                                                                    i
                                                                ].img_url || ""
                                                            }
                                                        />

                                                        <span
                                                            style={{
                                                                display:
                                                                    "inline-block",
                                                                maxHeight:
                                                                    "350px",
                                                                height: "100%",
                                                                width: "10%",
                                                            }}
                                                            onClick={() => {
                                                                var instance =
                                                                    M.Carousel.getInstance(
                                                                        document.getElementById(
                                                                            "carousel-1"
                                                                        )!
                                                                    );
                                                                instance.next();
                                                            }}
                                                        ></span>
                                                    </a>
                                                );
                                            }
                                        )}
                                    </>
                                )}
                            </div>

                            <div
                                id="carousel-2"
                                className="carousel carousel-slider show-on-small-only hide-on-med-and-up"
                                style={{ height: "350px" }}
                            >
                                {!data.getProduct.images ? (
                                    <></>
                                ) : (
                                    <>
                                        {data.getProduct.images.map(
                                            (_val, i) => {
                                                return (
                                                    // eslint-disable-next-line
                                                    <a
                                                        className="carousel-item noselect"
                                                        key={i}
                                                        style={{
                                                            maxHeight: "250px",
                                                            minHeight: "100px",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                display:
                                                                    "inline-block",
                                                                maxHeight:
                                                                    "250px",
                                                                height: "100%",
                                                                width: "12.5%",
                                                            }}
                                                            onClick={() => {
                                                                var instance =
                                                                    M.Carousel.getInstance(
                                                                        document.getElementById(
                                                                            "carousel-2"
                                                                        )!
                                                                    );
                                                                instance.prev();
                                                            }}
                                                        ></span>
                                                        <img
                                                            alt="product"
                                                            style={{
                                                                maxHeight:
                                                                    "250px",
                                                                width: "80%",
                                                            }}
                                                            src={
                                                                product.images[
                                                                    i
                                                                ].img_url || ""
                                                            }
                                                        />
                                                        <span
                                                            style={{
                                                                display:
                                                                    "inline-block",
                                                                maxHeight:
                                                                    "250px",
                                                                height: "100%",
                                                                width: "10%",
                                                            }}
                                                            onClick={() => {
                                                                var instance =
                                                                    M.Carousel.getInstance(
                                                                        document.getElementById(
                                                                            "carousel-2"
                                                                        )!
                                                                    );
                                                                instance.next();
                                                            }}
                                                        ></span>
                                                    </a>
                                                );
                                            }
                                        )}
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <img
                                    id="product-img"
                                    src={
                                        !product.images[0]
                                            ? "https://materializecss.com/images/sample-1.jpg"
                                            : product.images[0].img_url
                                    }
                                    alt="product"
                                    style={{ maxWidth: "100%" }}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="col s10 offset-s1 m3 offset-m1">
                    <div
                        style={{ marginBottom: "16px" }}
                        className="hide-on-small-only"
                        id="product-desc"
                    ></div>
                    <div className="centered">
                        <div
                            style={{ marginBottom: "16px", marginTop: "16px" }}
                            className="show-on-small hide-on-med-and-up"
                            id="product-desc-m"
                        ></div>
                    </div>
                    <div
                        className="divider"
                        style={{ marginBottom: "16px" }}
                    ></div>
                    {/* eslint-disable-next-line */}

                    {odata.getProductsOptions.length === 0 ? (
                        <>
                            <a
                                className="tooltipped"
                                data-position="right"
                                data-tooltip={`${product.stock} remaining`}
                            >
                                <div
                                    className="hide-on-small-only"
                                    style={{
                                        height: "55px",
                                        width: "100%",
                                        border: "1px solid black",
                                        marginBottom: "16px",
                                    }}
                                >
                                    <span
                                        className="filler"
                                        style={{
                                            display: "inline-block",
                                            height: "100%",
                                            backgroundColor: "#ff86f2",
                                        }}
                                    ></span>
                                </div>
                            </a>
                        </>
                    ) : (
                        <a
                            className="tooltipped"
                            data-position="right"
                            data-tooltip={`${option.option_stock} remaining`}
                        >
                            <div
                                className="hide-on-small-only "
                                style={{
                                    height: "55px",
                                    width: "100%",
                                    border: "1px solid black",
                                    marginBottom: "16px",
                                }}
                            >
                                <span
                                    className="option-bar-filler"
                                    style={{
                                        display: "inline-block",
                                        height: "100%",
                                        backgroundColor: "#ff86f2",
                                    }}
                                ></span>
                            </div>
                        </a>
                    )}

                    {product.stock === 0 ? (
                        <></>
                    ) : (
                        <>
                            {odata.getProductsOptions.length !== 0 ? (
                                <>
                                    {/* eslint-disable-next-line */}
                                    <a
                                        className="dropdown-trigger btn select"
                                        data-target="dropdown1"
                                    >
                                        <>
                                            {" "}
                                            {option.name ? (
                                                <span>{option.name}</span>
                                            ) : (
                                                <>SELECT OPTION</>
                                            )}
                                        </>
                                    </a>
                                    <button
                                        id="add-cart-btn"
                                        className="btn disabled chewy"
                                        onClick={() => {
                                            if (!!option) {
                                                M.toast({
                                                    html: `Added to cart,&nbsp;<a href="#/my-cart">Click here to enter cart!</a>`,
                                                });
                                                let tmp = product;
                                                tmp.option = option.name;
                                                tmp.option_id =
                                                    option.option_id;
                                                tmp.option_price =
                                                    option.option_price;
                                                dispatch(addProductToCart(tmp));
                                            }
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </>
                            ) : (
                                <button
                                    id="add-cart-btn"
                                    className="btn chewy"
                                    onClick={() => {
                                        M.toast({
                                            html: `Added to cart,&nbsp;<a href="#/my-cart">Click here to enter cart!</a>`,
                                        });
                                        dispatch(addProductToCart(product));
                                    }}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </>
                    )}

                    <ul id="dropdown1" className="dropdown-content">
                        <>
                            {odata.getProductsOptions.map((_val, i) => {
                                return (
                                    <li
                                        key={i}
                                        style={{
                                            backgroundColor: "black",
                                        }}
                                        onClick={() => {
                                            let percent = 100;

                                            percent =
                                                odata.getProductsOptions[i]
                                                    .stock;

                                            if (percent > 100) {
                                                percent = 100;
                                            }

                                            anime({
                                                targets: ".option-bar-filler",
                                                width: ["0%", `${percent}%`],
                                                easing: "easeInOutExpo",
                                            });

                                            setOption({
                                                name: odata.getProductsOptions[
                                                    i
                                                ].name,
                                                option_id:
                                                    odata.getProductsOptions[i]
                                                        .option_id,
                                                option_price:
                                                    odata.getProductsOptions[i]
                                                        .price,
                                                option_stock:
                                                    odata.getProductsOptions[i]
                                                        .stock,
                                            });

                                            document
                                                .getElementById("add-cart-btn")!
                                                .classList.remove("disabled");
                                        }}
                                    >
                                        {/* eslint-disable-next-line */}
                                        <span
                                            className="center"
                                            style={{
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            <a
                                                className="chewy bold"
                                                style={{
                                                    fontSize: "28px",
                                                    color: "white",
                                                }}
                                            >
                                                {
                                                    odata.getProductsOptions[i]
                                                        .name
                                                }
                                            </a>
                                        </span>
                                    </li>
                                );
                            })}
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

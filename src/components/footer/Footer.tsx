import "../../css/footer.scss";
import { FaInstagram, FaEnvelope, FaTwitter, FaFacebook } from "react-icons/fa";
import { useGetSocialsQuery } from "../../generated/graphql";

const Footer = () => {
    const { data } = useGetSocialsQuery({
        variables: {
            component: "footer",
        },
    });

    return (
        <></>
        // <div className="footer">
        //     <span>
        //         {!!data && data.getSocials ? (
        //             <>
        //                 {data.getSocials.map((_val, i) => {
        //                     if (data.getSocials[i].display) {
        //                         return (
        //                             <a
        //                                 id="social-link"
        //                                 style={{ color: "#f2f2f2" }}
        //                                 key={i}
        //                             >
        //                                 <SocialIcon
        //                                     social_logo={
        //                                         data.getSocials[i].social_logo
        //                                     }
        //                                 />
        //                             </a>
        //                         );
        //                     } else {
        //                         return null;
        //                     }
        //                 })}
        //             </>
        //         ) : null}
        //     </span>
        //     <span className="footer-copyright-text">© 2021 Dazzle Crew</span>

        //     <span
        //         style={{
        //             display: "flex",
        //             flexDirection: "column",
        //             justifyContent: "center",
        //         }}
        //     >
        //         <span>
        //             {!!data && data.getSocials ? (
        //                 <>
        //                     {data.getSocials.map((_val, i) => {
        //                         if (data.getSocials[i].display) {
        //                             return (
        //                                 <a
        //                                     id="social-link"
        //                                     key={i}
        //                                     href={data.getSocials[i].social_url}
        //                                 >
        //                                     <SocialIcon
        //                                         social_logo={
        //                                             data.getSocials[i]
        //                                                 .social_logo
        //                                         }
        //                                     />
        //                                 </a>
        //                             );
        //                         } else {
        //                             return null;
        //                         }
        //                     })}
        //                 </>
        //             ) : null}
        //         </span>
        //     </span>
        // </div>
    );
};

const SocialIcon: React.FC<{ social_logo: string }> = ({ social_logo }) => {
    switch (social_logo) {
        case "I": {
            return (
                <FaInstagram
                    style={{
                        height: 30,
                        width: 30,
                    }}
                />
            );
        }

        case "E": {
            return (
                <FaEnvelope
                    style={{
                        height: 30,
                        width: 30,
                    }}
                />
            );
        }
        case "T": {
            return (
                <FaTwitter
                    style={{
                        height: 30,
                        width: 30,
                    }}
                />
            );
        }
        case "F": {
            return (
                <FaFacebook
                    style={{
                        height: 30,
                        width: 30,
                    }}
                />
            );
        }

        default: {
            return <>ERROR</>;
        }
    }
};
export default Footer;

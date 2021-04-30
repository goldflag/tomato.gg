// NPM
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import styled from "styled-components";

// LOCAL
import { InfoPage } from "Components";

const trackingId = process.env.REACT_APP_GA;

const Styles = styled.div`
    background-color: rgba(40, 40, 70, 0.5);
    padding: 1rem;
    color: rgb(230, 230, 230);

    h1,
    h2 {
        color: rgb(255, 255, 255);
    }
`;

export default function Privacy() {
    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/privacy");
    }, []);

    return (
        <>
            <Helmet>
                <title>Privacy Policy - Tomato.gg</title>
            </Helmet>
            <div style={{ padding: "2em", paddingTop: "0em" }}>
                <InfoPage>
                    <Styles>
                        <h1>Privacy Policy</h1>
                        Tomato.gg takes your privacy seriously. To better protect your privacy we provide this privacy
                        policy notice explaining the way your personal information is collected and used.
                        <h2>Collection of Routine Information</h2>
                        This website track basic information about their users. This information includes, but is not
                        limited to, IP addresses, browser details, timestamps and referring pages. None of this
                        information can personally identify specific users to this website. The information is tracked
                        for routine administration and maintenance purposes.
                        <h2>Cookies</h2>
                        Where necessary, this website uses cookies to store information about a visitor’s preferences
                        and history in order to better serve the user and/or present the user with customized content.
                        <h2>Advertisement and Other Third Parties</h2>
                        We use third party advertisements to support our site. Some of these advertisers may be served
                        from our third party advertiser. You can view their privacy policy and cookie policy here.
                        <br />
                        We use Google Analytics and Comscore to analyse the use of our website. Google Analytics and
                        Comscore gather information about website use by means of cookies. The information gathered
                        relating to our website is used to create reports about the use of our website. Google's privacy
                        policy is available at:{" "}
                        <a href={"https://www.google.com/policies/privacy/"}>
                            https://www.google.com/policies/privacy/
                        </a>
                        . Comscore’s privacy policy is available at{" "}
                        <a href={"https://www.comscore.com/About-comScore/Privacy-Policy"}>
                            https://www.comscore.com/About-comScore/Privacy-Policy
                        </a>
                        .<h2>Links to Third Party Websites</h2>
                        We have included links on this website for your use and reference. We are not responsible for
                        the privacy policies on these websites. You should be aware that the privacy policies of these
                        websites may differ from our own.
                        <h2>Security</h2>
                        The security of your personal information is important to us, but remember that no method of
                        transmission over the Internet, or method of electronic storage, is 100% secure. While We strive
                        to use commercially acceptable means to protect your personal information, we cannot guarantee
                        its absolute security.
                        <h2>Changes To This Privacy Policy</h2>
                        This Privacy Policy is effective as of 4/29/2021 and will remain in effect except with respect
                        to any changes in its provisions in the future, which will be in effect immediately after being
                        posted on this page. We reserve the right to update or change our Privacy Policy at any time and
                        you should check this Privacy Policy periodically. If we make any material changes to this
                        Privacy Policy, we will notify you either through the email address you have provided us, or by
                        placing a prominent notice on our website.
                    </Styles>
                </InfoPage>
            </div>
        </>
    );
}

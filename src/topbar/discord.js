// NPM
import React from "react";
import styled from "styled-components";

// LOCAL
import DiscordLogo from "Assets/Discord.svg";

const Wrapper = styled.div`
    margin-left: 0.5rem;
    margin-bottom: -5px;
    &:hover {
        opacity: 0.5;
    }
`;

const Discord = () => (
    <Wrapper>
        <a target="blank" href="https://discord.gg/qA2bV7K">
            <img src={DiscordLogo} width="33" height="33" alt="discordicon" />
        </a>
    </Wrapper>
);

export default Discord;

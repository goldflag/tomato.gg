// NPM
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Paper from "@material-ui/core/Paper";
import LocalizedStrings from "react-localization";

// LOCAL
import "CSS/tankstats.css";
import "CSS/innerpage.css";

const strings = new LocalizedStrings({
    en: {
        h1: `About Tomato.gg`,
        updated: `UPDATED `,
        about0: `I created this site to provide an accessible interface to view a huge variety of stats, 
        many of which are only found here. Some stats have taken inspiration from other sites.`,
        about1: `Tomato.gg doesn't aim to do everything. It will never have server stats as detailed as those
        on wot-news.com, nor will it have the precise individual battles as are accessible on
        WN8lab.com. Tomato.gg is being actively developed and is nowhere near feature complete. In
        the future, I plan to expand the player stats page, expand the tank stats page, implement
        clan stats, and finish the leaderboards.`,
        about2: `Tomato.gg fully supports EU, NA, and ASIA player stats. You can still view stats for RU 
        gamers, but there are no automatic daily stat updates.`,
        about3: `Check out Tomato.gg on mobile as well. I have optimized the mobile site for the best user
        experience while still being nearly 100% feature complete.`,
        about4: `has helped extensively with the development of Tomato.gg. Thanks so much!`,
        joinMy: `Join my`,
        discord: `Discord server`,
        feedback: `If you would like to provide feedback, suggestions, and bug reports.`,
        thanks: `Thanks for using Tomato.gg!`,
    },
    fr: {
        h1: `À propos de Tomato.gg`,
        updated: `Mis à jour`,
        about0: `J'ai créé ce site pour fournir une interface accessible pour voir une grande variété de statistiques, 
        dont beaucoup qui se trouvent seulement ici. Quelques statistiques ont été inspiré par d'autres sites.`,
        about1: `Tomato.gg ne vise pas à faire tout. Il n'y aura jamais les statistiques sur les serveurs si détaillés
        sur wotnews.com, ni il n'y aura-t-il les précis combats individuels sur
        WN8lab.com. Tomato.gg est activement développé et n'est pas du tout proche d'être terminé. Dans le futur, je prévois agrandir les pages sur les statistiques des joueurs, agrandir les pages pour les statistiques pour chars, ajouter les statistiques pour clans et 
        finaliser les classements.`,
        about2: `Tomato.gg soutient pleinement EU, NA, and ASIE pour les statistiques pour joeurs. Vous pouvez quand même regarder les statistiques 
        pour les joueurs sur le serveur russe, mais il n'y aura pas de mise à jour quotidien automatique des statistiques.`,
        about3: `Jetez un coup d'œil sur Tomato.gg pour Mobile aussi. J'ai optimisé le site Mobile pour la meilleure expérience d'utilisateur 
        tout en étant presque 100% fonction complète.`,
        about4: `a contribué largement au développement de Tomato.gg. Merci beaucoup!`,
        joinMy: `Rejoignez mon`,
        discord: `Serveur Discord`,
        feedback: `Si vous voulez dire quelque chose sur le site, faire des suggestions, ou faire un rapport de bogue.`,
        thanks: `Merci d'utiliser Tomato.gg!`,
    },
    tr: {
        h1: `Tomato.gg Hakkında`,
        updated: `GÜNCELLENDİ `,
        about0: `Çok çeşitli istatistikleri görüntülemek için erişilebilir bir arayüz sağlamak adına bu siteyi 
        oluşturdum. Birçok araç sadece burada var. Bazı istatistikler için diğer sitelerden ilham alındı.`,
        about1: `Tomato.gg her şeyi yapmayı hedeflemiyor. Hiçbir zaman wot-news.com'da olduğu kadar detaylı 
        sunucu istatistiklerine sahip olmayacak ve WN8lab.com'daki kadar hassas bireysel istatistikleri 
        göstermeyecek. Tomato.gg aktif olarak geliştiriliyor ve özellik tamamlanmaya yakın değil, Gelecekte, 
        oyuncu istatistikleri sayfasını genişletmeyi, tank istatistikleri sayfasını genişletmeyi, klan 
        istatistiklerini uygulamayı ve skor tablolarını bitirmeyi planlıyorum.`,
        about2: `Tomato.gg; EU, NA ve ASIA oyuncu istatistiklerini tam olarak destekler. RU oyuncularının 
        istatistiklerini de görüntüleyebilirsiniz, ancak otomatik günlük istatistik güncellemeleri yoktur. `,
        about3: `Mobil cihazlarda da Tomato.gg'ye  göz atın. Neredeyse tüm özelliklere sahip en iyi kullanıcı 
        deneyimi için mobil siteyi optimize ettim. `,
        about4: `Tomato.gg'in geliştirilmesine büyük ölçüde yardımcı oldu. Çok teşekkürler! `,
        joinMy: `Katılmak istersen `,
        discord: `Discord sunucusu`,
        feedback: `Geri bildirim, öneri ve hata raporları sağlamak isterseniz. `,
        thanks: `Tomato.gg'yi kullandığınız için teşekkürler!`,
    },
});

const trackingId = process.env.REACT_APP_GA;

export default function About() {
    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/about");
    }, []);

    return (
        <div style={{ padding: "2em", paddingTop: "5em" }}>
            <div className="narrowpage">
                <Paper
                    style={{
                        backgroundColor: "rgba(40, 40, 70, 0.5)",
                        padding: "1rem",
                        color: "rgb(230, 230, 230)",
                    }}
                >
                    <div>
                        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>{strings.h1}</h1>
                        <span
                            style={{
                                fontSize: "0.8rem",
                                lineHeight: "1.3rem",
                                color: "rgb(150,150,150)",
                            }}
                        >
                            {strings.updated} 27/2/2021
                        </span>{" "}
                        <br />
                        <br />
                        <span style={{ fontSize: "0.9rem", lineHeight: "1.4rem" }}>
                            {strings.about0}
                            <br />
                            {strings.about1}
                            <br />
                            <br />
                            {strings.about2}
                            <br />
                            <br />
                            {strings.about3}
                            <br />
                            <br />
                            <a target="blank" href="/stats/NA/Superdude3800=1007264827">
                                Superdude3800
                            </a>{" "}
                            {strings.about4}
                            <br />
                            <br />
                            Join my{" "}
                            <a target="blank" href="https://discord.gg/qA2bV7K">
                                {strings.discord}
                            </a>{" "}
                            {strings.feedback}
                            <br />
                            <br />
                            {strings.thanks} <br />-{" "}
                            <a target="blank" href="/stats/NA/goldflag=1011694618">
                                Goldflag
                            </a>
                        </span>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

// NPM
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import { InfoPage } from "Components";
import { languages } from "Data/languages";

const { formatString, ...strings } = LocalizedStrings({
    en: {
        title: `About`,
        h1: `About Tomato.gg`,
        updated: `UPDATED {0}`,
        about0: `I created this site to provide an accessible interface to view a huge variety of stats, 
        many of which are only found here. Some stats have taken inspiration from other sites.`,
        about1: `Tomato.gg doesn't aim to do everything. It will never have server stats as detailed as those
        on wot-news.com, nor will it have the precise individual battles as are accessible on
        WN8lab.com. Tomato.gg is being actively developed and is nowhere near feature complete. In
        the future, I plan to expand the player stats page, expand the tank stats page, implement
        clan stats, and finish the leaderboards.`,
        about2: `Tomato.gg fully supports EU, NA, and ASIA player stats. Support for RU player stats is planned and coming Soon™.`,
        about3: `Check out Tomato.gg on mobile as well. I have optimized the mobile site for the best user
        experience while still being nearly 100% feature complete.`,
        about4: `has helped extensively with the development of Tomato.gg. Thanks so much!`,
        translators: `Tomato.gg's internationalization was accomplished with the help of these amazing volunteers:`,
        feedback: `Join my {0} if you would like to provide feedback, suggestions, and bug reports.`,
        discord: `Discord server`,
        thanks: `Thanks for using Tomato.gg!`,
    },
    cs: {
        title: "O nás",
        h1: `O Tomato.gg`,
        updated: `AKTUALIZOVÁNO {0}`,
        about0: `Tento web jsem vytvořil, abych poskytl široce dostupné uživatelské rozhraní pro prohlížení 
        nejrůznějších statistik, mnoho z nich je dostupných pouze zde. Některé statistiky jsou inspirovány jinými weby.`,
        about1: `Tomato.gg se nezaměřuje na úplně vše. Nikdy zde nebudou tak detailní serverové statistiky, jako na 
        na wot-news.com ani zde nebudou zobrazovány důkladně jednotlivé bitvy jako na WN8lab.com. Tomato.gg je ve 
        vývoji a zdaleka ještě není dokončené. Do budoucna plánuji rozšířit stránku s hráčovými statistikami, rozšířit 
        stránku se statistikami jednotlivých vozidel, implementovat klanové statistiky a dokončit žebříčky.`,
        about2: `Tomato.gg plně podporuje statistiky hráčů z NA, EU a ASIA serveru. Stále můžete nahlížet do statistik 
        hráčů z RU serveru, ale tyto
        statistiky nejsou automaticky aktualizovány na denní bázi.`,
        about3: `Podívejte se na Tomato.gg také na mobilu. Optimalizoval jsem mobilní web pro ten nejlepší uživatelský 
        zážitek. Mobilní web přitom podporuje skoro 100% stávajicíh funkcí.`,
        about4: `mi značně pomohl s vývojem Tomato.gg. Díky moc!`,
        translators: `Internacionalizace Tomato.gg byla dosažena díky těmto úžasným pomocníkům:`,
        feedback: `Přidejte se na můj {0} pokud byste chtěli poskytnout zpětnou vazbu, návrhy na vylepšení nebo nahlásit chybu.`,
        discord: `Discord server`,
        thanks: `Děkuji, že požíváte Tomato.gg!`,
    },
    de: {
        title: "Über uns",
        h1: `Über Tomato.gg`,
        updated: `AKTUALISIERT {0}`,
        about0: `Ich habe diese Seite erstellt um eine Schnittstelle zu einer riesigen Menge an Statistiken anzubieten.
        Vieles davon kann nur hier gefunden werden doch einige Statistiken wurden von anderen Seiten inspiriert.`,
        about1: `Tomato.gg versucht nicht Alles zu machen. Es wird weder so detaillierte Serverstatistiken wie
        wot-news.com haben, noch individuellen Gefechte abbilden wie auf WN8lab.com.
        Tomato.gg wird aktiv entwickelt und hat bei weitem noch nicht alle geplanten Features. In Zukunft plane
        ich die Spieler- und Panzerstatistiken zu erweitern, Clanstatistiken zu implementieren und die Bestenlisten
        fertig zu stellen.`,
        about2: `Tomato.gg unterstützt Statistiken von Spielern von EU, NA, und ASIA vollständig. Die Statistiken von
        RU Spielern können auch angesehen werden. Diese werden aber nicht täglich aktualisiert.`,
        about3: `Sieh dir auch die mobile Version von Tomato.gg an. Diese unterstützt beinahe 100% der Funktionen und
        ist auf User Experience optimiert.`,
        about4: `hat sehr viel zur Entwicklung von Tomato.gg beigetragen. Vielen Dank dafür!`,
        translators: `Die Übersetzung von Tomato.gg wurde durch die Hilfe dieser großartigen Freiwilligen erreicht:`,
        feedback: `Für Anregungen, Feedback und Bug Reports tritt meinem {0} bei.`,
        discord: `Discord Server`,
        thanks: `Vielen Dank dass du Tomato.gg nutzt!`,
    },
    es: {
        title: "Acerca de",
        h1: `Acerca de Tomato.gg`,
        updated: `ACTUALIZADO {0}`,
        about0: `Creé este sitio web para proporcionar una interfaz accesible para ver una gran variedad de estadísticas, 
        muchas de las cuales solo se encuentran aquí. Algunas estadísticas se han inspirado en otros sitios.`,
        about1: `Tomato.gg no aspira a hacer todo. Nunca tendrá estadísticas del servidor tan detalladas como las de 
        wot-news.com, ni tendrá las estadísticas precisas de las batallas individuales que son accesible en WN8lab.com. 
        Tomato.gg está siendo desarrollando activamente y no está cerca de su completa funcionalidad. En el futuro, planeo 
        expandir la página de estadísticas del jugador, la página de estadísticas de los tanques, implementar 
        estadísticas del clan y terminar la tabla de clasificación.`,
        about2: `Tomato.gg es totalmente compatible con las estadísticas de jugadores de EU, América del norte, y Asia. 
        Aunque ya puedes ver las estadísticas para los jugadores de Rusia, no se actualizan automáticamente a diario.`,
        about3: `Puedes ingresar a Tomato.gg con tu móvil también. He optimizado el sitio web para la mejor experiencia 
        de usuario y funcionan casi el 100% de las funciones.`,
        about4: `ha ayudado mucho con el desarrollo de Tomato.gg. ¡Muchas gracias!.`,
        translators: `La internacionalización de Tomato.gg se logró con la ayuda de estos voluntarios increíbles:`,
        feedback: `Únete a mi {0} si quieres realizar comentarios, sugerencias e informar errores.`,
        discord: `Servidor de Discord`,
        thanks: `¡Gracias por usar Tomato.gg!`,
    },
    fr: {
        title: "À propos",
        h1: `À propos de Tomato.gg`,
        updated: `MIS À JOUR LE {0}`,
        about0: `J'ai créé ce site pour fournir une interface accessible permettant de visualiser une grande variété de statistiques,         
        dont beaucoup ne se trouvent qu'ici. Certaines des statistiques sont néanmoins inspirées par d'autres sites.`,
        about1: `Tomato.gg n'a pas pour objectif de tout faire. Ce site n'aura jamais des statistiques de serveur aussi détaillées 
        que celles disponibles sur wot-news.com, et il n'aura pas non plus les batailles individuelles précises qui sont accessibles 
        sur WN8lab.com. Tomato.gg est en cours de développement et est encore loin d'être entièrement terminé. 
        Dans le futur, je prévois de renforcer la page de statistiques des joueurs, de consolider la page de 
        statistiques des chars, d'implémenter les statistiques des clans et de finaliser les classements des leaders.`,
        about2: `Tomato.gg supporte entièrement les statistiques des joueurs des serveurs EU, NA et d'ASIE. La prise en charge 
        des statistiques des joueurs des serveurs RU est prévue et sera bientôt disponible.`,
        about3: `Découvrez également Tomato.gg sur vos appareils mobiles. J'ai optimisé le site mobile pour offrir la meilleure 
        expérience utilisateur possible tout en conservant la quasi-totalité des fonctionnalités.`,
        about4: `a largement contribué au développement de Tomato.gg. Un grand merci !`,
        translators: `L'internationalisation de Tomato.gg a été accomplie grâce à ces extraordinaires bénévoles :`,
        feedback: `Rejoignez mon {0} si vous souhaitez formuler des commentaires, émettre des suggestions et signaler des bogues.`,
        discord: `serveur Discord`,
        thanks: `Merci d'utiliser Tomato.gg !`,
    },
    hr: {
        h1: `O Tomato.gg`,
        updated: `UŽURIRANO {0}`,
        about0: `Napravio sam ovu stranicu kako bi pružio pristupačno sučelje za pregled različitih statistika,
        od kojih se mnogi od njih mogu naći samo ovdje. Neke statistike su potaknute sa drugih web lokacija.`,
        about1: `Tomato.gg ne cilja napraviti sve. Nikada neće imati detaljnu server statistiku kao šta ima wot-news.com, 
        niti će imati precizne pojedinačne bitke na kojima se može pristupiti na
        WN8lab.com. Tomato.gg se aktivno razvija te nije ni blizu završnog rada. U 
        budućnosti planiram proširiti stranicu statistike igrača,
        proširiti stranicu statistike tenkova, implementirati klanske statistike i završiti ljestvicu.`,
        about2: `Tomato.gg u potpunosti podržava EU, NA, i ASIA statistiku igrača. Još uvijek možete vidjeti statistiku za RU
        igrača, ali nema automatskih dnevnih ažuriranja statistike.`,
        about3: `Pogledajte Tomato.gg i na mobitelu. Optimizirao sam mobilno mjesto za najbolje korisničko 
        iskustvo, dok je još uvijek skoro 100% kompletan.`,
        about4: `je pomogao u razvoju programa Tomato.gg. Hvala puno!`,
        translators: `Tomato.gg's internacionalizacija je postignuta uz pomoć ovih nevjerojatnih dobrovoljaca:`,
        feedback: `Pridružite se {0} ako želite dati povratne informacije, sugestije, i prijave bugova.`,
        discord: `Discord server`,
        thanks: `Hvala na korištenju Tomato.gg!`,
    },
    ko: {
        title: "소개",
        h1: `Tomato.gg의 소개`,
        updated: `UPDATED {0}`,
        about0: ` 이 사이트는 창의적인 통계들을 많은 유저분들이 쉽게 볼 수 있도록 만들어졌습니다. 몇몇통계들은 다른 사이트에서 영감을 받았습니다.`,
        about1: ` 토마토는 모든 것을 할려고 하진 않을겁니다. wot-news.com,처럼 디테일한 서버통계, WN8lab.com의 정확한 개인 전투수같은 
        통계들은 절대 나오진 않을겁니다. 토마토는 현재 활발하게 개발되고 있으나 모든 기능들이 완벽하진 않습니다. 저는 유저, 전차, 클랜 통계를 
        주력으로 최종적인 리더보드를 개발하는 계획을 가지고 있습니다.`,
        about2: `토마토는 유럽, 북아메리카와 아시아 지역의 유저 통계들을 지원합니다. 러시안 유저들 통계도 볼 수는 있으나, 자동 통계업데이트는 없을겁니다.,`,
        about3: `모바일기기에서 토마토를 확인 해보세요. 이 사이트는 모바일 환경을 지원하며 거의 100%의 기능들을 모바일에서 즐길 수 있습니다 `,
        about4: `___들의 큰 지원으로 개발했습니다. 매우 감사합니다!`,
        translators: `토마토의 글로벌라이션은 이 대단한 협력자들의 도움들로 이루어져있습니다:`,
        feedback: `만약 피드백, 제의와 버그 리포트를 하고 싶으시면 {0} 들어 오십시오.`,
        discord: `디스코드 서버에`,
        thanks: `토마토를 애용해주셔서 감사합니다!`,
    },
    pl: {
        title: "O Stronie",
        h1: `O Tomato.gg`,
        updated: `ZAKTUALIZOWANE {0}`,
        about0: `Stworzyłem tę witrynę, aby zapewnić przystępny interfejs do przeglądania różnych statystyk.
        Wiele z nich można znaleźć tylko tutaj, zaś niektóre zostały zainspirowane innymi witrynami.`,
        about1: `Tomato.gg nie ma na celu zrobienia wszystkiego. Nigdy nie będzie miało tak szczegółowych statystyk 
        serwera jak te na wot-news.com, nie będzie też miało precyzyjnych pojedynczych bitew, jakie są dostępne na
        WN8lab.com. Tomato.gg jest aktywnie rozwijane i nie jest nawet blisko bycia ukończonym. W przyszłości,
        Planuję rozwinąć stronę ze statystykami graczy, rozwinąć stronę ze statystykami czołgów, wdrożyć
        statystyki klanów i ukończyć rankingi.`,
        about2: `Tomato.gg w pełni wspiera statystyki graczy z regionów EU, NA, i ASIA. Można wyświetlić statystyki 
        dla graczy z RU, ale nie mają automatycznych codziennych aktualizacji.`,
        about3: `Sprawdź również Tomato.gg na telefonie. Zoptymalizowałem witrynę mobilną pod kątem najlepszych wrażeń 
        użytkownika, a jej funkcje są prawie w 100% gotowe.`,
        about4: `bardzo pomógł w rozwoju Tomato.gg. Wielkie dzięki!`,
        translators: `Internacjonalizacja Tomato.gg została osiągnięta dzięki tym wspaniałym wolontariuszom:`,
        feedback: `Dołącz do naszego {0} jeśli chcesz przekazać opinie, sugestie lub zgłosić błędy.`,
        discord: `serwera Discord`,
        thanks: `Dziękujemy za używanie Tomato.gg!`,
    },
    ru: {
        title: "About",
        h1: `О Tomato.gg`,
        updated: `ОБНОВЛЕНО {0}`,
        about0: `Я создал этот сайт, чтобы предоставить доступный интерфейс для просмотра огромной разнообразной статистики,
        многие из которых можно найти только здесь. Некоторые статистические данные были вдохновлены другими сайтами.`,
        about1: `Tomato.gg не стремится делать все. У него никогда не будет такой детальной статистики сервера, как у
        на wot-news.com, и не будет иметь точных индивидуальных сражений, которые доступны на
        WN8lab.com. Tomato.gg активно развивается и еще далеко не завершен. В
        в будущем планирую расширить страницу статистики игроков, расширить страницу статистики танков, реализовать
        клановой статистики и завершите списки лидеров.`,
        about2: `Tomato.gg полностью поддерживает статистику игроков с серверов EU, NA и Азии. Вы по-прежнему можете 
        просматривать статистику для RU игроков, но в настоящее время автоматических ежедневных обновлений статистики нет.`,
        about3: `Проверьте Tomato.gg также на мобильном телефоне. МЫ оптимизировали мобильный сайт для лучшего просмотра
        пока все еще в разработке.`,
        about4: `внес большой вклад в развитие Tomato.gg. Спасибо большое!`,
        translators: `Tomato.gg's интернационализация была достигнута с помощью этих замечательных добровольцев:`,
        feedback: `Присоединяйтесь к моему {0} eсли вы хотите оставить отзыв, предложения и отчеты об ошибках.`,
        discord: `Discord Сервер`,
        thanks: `Спасибо, что посетили Tomato.gg!`,
    },
    tr: {
        title: "Hakkında",
        h1: `Tomato.gg Hakkında`,
        updated: `GÜNCELLENDİ {0}`,
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
        translators: `Tomato.gg'nin yerelleştirilmesi, bu harika gönüllülerin yardımıyla gerçekleştirildi:`,
        feedback: `Katılmak istersen {0} geri bildirim, öneri ve hata raporları sağlamak isterseniz.`,
        discord: `Discord sunucusu`,
        thanks: `Tomato.gg'yi kullandığınız için teşekkürler!`,
    },
    zh: {
        title: "關於",
        h1: `關於 Tomato.gg`,
        updated: `更新 {0}`,
        about0: `我創立了Tomato.gg 是想提供一個能搜尋各類統計數據、且只能在這邊查找的介面，並從其他網站提供的統計資料中獲得了一些靈感。`,
        about1: `Tomato.gg 並非旨在提供所有功能。它無法擁有wot-news.com 那些詳細的伺服器統計數據，也不會具備如WN8lab.com 上的精確個別戰鬥。 
        Tomato.gg 正積極開發中，部分功能尚未完整。在未來我計劃擴展玩家、車輛以及公會的統計資料並完成各類排行榜的相關內容。`,
        about2: `Tomato.gg 完全支援EU、NA和ASIA伺服器玩家的數據資料。您仍然可以查看RU伺服器玩家的相關統計，但尚無每日自動更新功能。`,
        about3: `現在您可以在移動設備上使用Tomato.gg。我已經針對用戶優化了使用體驗，所有功能近乎完整。`,
        about4: `在Tomato.gg的開發中提供了廣泛的幫助。 非常感謝！`,
        translators: `感謝志工們義不容辭地讓 Tomato.gg 得以完成多國語言版本:`,
        joinMy: `加入我的 {0} 如果您想提供反饋，建議和錯誤報告。`,
        Discord: `Discord服務器`,
        thanks: `感謝使用Tomato.gg!`,
    },
});

const translators = {
    cs: [{ name: "Milda_444", url: "https://www.facebook.com/Milda.444" }],
    de: [
        { name: "Red40x", url: "/stats/EU/red4ox=559710437" },
        { name: "Simon", url: "/stats/EU/sim51=505731151" },
    ],
    es: [{ name: "DoogsDay", url: "/stats/NA/doogsday=1008311439" }, { name: "tootsieroll174" }],
    fr: [
        { name: "candymonster1953", url: "/stats/NA/candymonster1953=1038153624" },
        { name: "ForgottenShots", url: "/stats/EU/ForgottenShots=529569765" },
        { name: "Matthieu R.", url: "https://www.upwork.com/freelancers/~0162d87038acacf992" },
    ],
    ko: [{ name: "Roika", url: "/stats/ASIA/Crawling_Ghost=2005611731" }],
    hr: [{ name: "Sačo", url: "https://www.instagram.com/sacobrt/" }],
    pl: [{ name: "herhor67", url: "https://herhor.net/" }, { name: "wasyfko" }],
    ru: [{ name: "AllMyHomiesHateArty", url: "/stats/NA/onlyidiotaint_=1013512767" }],
    tr: [{ name: "ProFighte", url: "/stats/EU/profighte=516922883" }],
    zh: [{ name: "立早", url: "/stats/ASIA/pujols1107=2002339441" }],
};

const trackingId = process.env.REACT_APP_GA;

const UPDATED_DATE = new Date("3/15/2021");

export default function About() {
    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/about");
    }, []);

    const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    const localUpdatedDate = UPDATED_DATE.toLocaleDateString(navigator.languages[0], dateOptions);

    return (
        <>
            <Helmet>
                <title>{strings.title} - Tomato.gg</title>
            </Helmet>
            <div style={{ padding: "2em", paddingTop: "0em" }}>
                <InfoPage>
                    <div
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
                                {formatString(strings.updated, localUpdatedDate)}
                            </span>
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
                                {strings.translators}
                                <ul>
                                    {Object.entries(translators).map(([code, forLanguage], i) => (
                                        <li key={i}>
                                            {languages[code].name} -{" "}
                                            {forLanguage.map(({ name, url }, i) => (
                                                <React.Fragment key={i}>
                                                    {i !== 0 ? ", " : ""}
                                                    {url ? (
                                                        <a target="blank" href={url} key={i}>
                                                            {name}
                                                        </a>
                                                    ) : (
                                                        name
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                                <br />
                                <br />
                                {formatString(
                                    strings.feedback,
                                    <a target="blank" href="https://discord.gg/qA2bV7K">
                                        {strings.discord}
                                    </a>
                                )}
                                <br />
                                <br />
                                {strings.thanks} <br />-{" "}
                                <a target="blank" href="/stats/NA/goldflag=1011694618">
                                    Goldflag
                                </a>
                            </span>
                        </div>
                    </div>
                </InfoPage>
            </div>
        </>
    );
}

// NPM
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Paper from "@material-ui/core/Paper";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import "CSS/tankstats.css";
import "CSS/innerpage.css";
import { languages } from "Data/localizations";

const { formatString, ...strings } = LocalizedStrings({
    en: {
        h1: `About Tomato.gg`,
        updated: `UPDATED {0}`,
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
        translators: `Tomato.gg's internationalization was accomplished with the help of these amazing volunteers:`,
        feedback: `Join my {0} if you would like to provide feedback, suggestions, and bug reports.`,
        discord: `Discord server`,
        thanks: `Thanks for using Tomato.gg!`,
    },
    cs: {
        h1: `O Tomato.gg`,
        updated: `AKTUALIZOVÁNO {0}`,
        about0: `Tento web jsem vytvořil, abych poskytl široce dostupné uživatelské rozhraní pro prohlížení 
        nejrůznějších statistik, mnoho z nich jedostupných pouze zde. Některé statistiky jsou inspirovány jinými weby.`,
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
        thanks: `Děkujeme, že používáte Tomato.gg!`,
    },
    de: {
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
        h1: `Sobre Tomato.gg`,
        updated: `ACTUALIZADO {0}`,
        about0: `Creé este sitio para proporcionar una interfaz accesible para ver un gran variedad de estadísticas, 
        muchas de las cuales solo se encuentran aquí. Algunas estadísticas han inspirado en otros sitios.`,
        about1: `Tomato.gg no aspira hacer todo. Nunca tendrá estadísticas del servidor tan detalladas como 
        las en wot-news.com, ni tendrá las batallas individuales precisas que son accesible en WN8lab.com. 
        Tomato.gg está desarrollando activamente y no está cerca de la función completa, En el futuro, planeo 
        expandir la página de estadísticas del jugador, expandir la página de estadísticas de los tanques, 
        implementar estadísticas del clan, y terminar la tabla de clasificación.`,
        about2: `Tomato.gg es totalmente compatible con las estadísticas de jugadores de EU, América del norte, y Asia. 
        Ya puedes ver las estadísticas para los jugadores de Rusia, pero no hay actualizaciones de estadísticas diarias automáticas.`,
        about3: `Mira Tomato.gg en móvil también. He optimizado el sitio para la mejor experiencia de usuario mientras 
        teniendo casi 100% de las funciones completas`,
        about4: `ha ayudado mucho con el desarrollo de Tomato.gg. ¡Muchas gracias!.`,
        feedback: `Únete a mi {0} si quieres proveer comentarios, sugerencias, y informes de errores.`,
        discord: `Servidor de Discord`,
        thanks: `¡Gracias por usar Tomato.gg!`,
    },
    fr: {
        h1: `À propos de Tomato.gg`,
        updated: `MIS À JOUR {0}`,
        about0: `J'ai créé ce site pour fournir une interface accessible pour voir une grande variété de statistiques, 
        dont beaucoup qui se trouvent seulement ici. Quelques statistiques ont été inspiré par d'autres sites.`,
        about1: `Tomato.gg ne vise pas à faire tout. Il n'y aura jamais les statistiques sur les serveurs si détaillés
        sur wotnews.com, ni il n'y aura-t-il les précis combats individuels sur
        WN8lab.com. Tomato.gg est activement développé et n'est pas du tout proche d'être terminé. Dans le futur, 
        je prévois agrandir les pages sur les statistiques des joueurs, agrandir les pages pour les statistiques pour 
        chars, ajouter les statistiques pour clans et finaliser les classements.`,
        about2: `Tomato.gg soutient pleinement EU, NA, and ASIE pour les statistiques pour joeurs. Vous pouvez quand même regarder 
        les statistiques pour les joueurs sur le serveur russe, mais il n'y aura pas de mise à jour quotidien automatique des statistiques.`,
        about3: `Jetez un coup d'œil sur Tomato.gg pour Mobile aussi. J'ai optimisé le site Mobile 
        pour la meilleure expérience d'utilisateur tout en étant presque 100% fonction complète.`,
        about4: `a contribué largement au développement de Tomato.gg. Merci beaucoup!`,
        translators: `L'internationalisation de Tomato.gg a été accomplie avec l'aide de ces incroyables volontaires :`,
        feedback: `Rejoignez mon {0} si vous voulez dire quelque chose sur le site, faire des suggestions, ou faire un rapport de bogue.`,
        discord: `Serveur Discord`,
        thanks: `Merci d'utiliser Tomato.gg!`,
    },
    pl: {
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
        feedback: `Присоединяйтесь к моему {0} eсли вы хотите оставить отзыв, предложения и отчеты об ошибках.`,
        discord: `Discord Сервер`,
        thanks: `Спасибо, что посетили Tomato.gg!`,
    },
    tr: {
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
        h1: `關於 Tomato.gg`,
        updated: `更新 {0}`,
        about0: `我創建網站的目的是提供一個能查看各種統計數據、只能在這邊查找的介面，並從其他網站提供的統計資料中獲得了一些靈感。`,
        about1: `Tomato.gg並非旨在做所有的事。 它永遠不會擁有wot-news.com上詳細的伺服器統計數據，也不會擁有WN8lab.com上的精確個人戰鬥。
        Tomato.gg正在積極開發中，功能尚不完善。在未來，我計劃擴展玩家的數據頁面、戰車的統計數據、實行公會統計數據並完成排行榜的內容。`,
        about2: `Tomato.gg完全支援EU、NA和ASIA伺服器玩家的數據資訊。 您仍然可以查看RU伺服器玩家的統計數據，但沒有每日自動更新。`,
        about3: `可以在移動設備上使用Tomato.gg。 我已經針對用戶優化了移動網站體驗，同時仍有將近100％能完善所有功能。`,
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
    es: [{ name: "tootsieroll174" }],
    fr: [
        { name: "candymonster1953", url: "/stats/NA/candymonster1953=1038153624" },
        { name: "ForgottenShots", url: "/stats/EU/ForgottenShots=529569765" },
    ],
    pl: [{ name: "herhor67", url: "https://herhor.net/" }, { name: "wasyfko" }],
    ru: [{ name: "AllMyHomiesHateArty", url: "" }],
    tr: [{ name: "ProFighte", url: "/stats/EU/profighte=516922883" }],
    zh: [{ name: "pujols1107", url: "/stats/ASIA/pujols1107=2002339441" }],
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
                </Paper>
            </div>
        </div>
    );
}

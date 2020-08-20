export default function zeroBattles(stats) {
    console.log(stats);
    if (stats.battles === 0) {
        stats = {
            battles: 0,
            tier: '-',
            overallWN8: '-',
            wins: '-',
            losses: '-',
            draws: '-',
            damage: '-',
            damage_received: '-',
            frags: '-',
            destroyed: '-',
            survived: '-',
            spotted: '-',
            cap: '-',
            def: '-',
            xp: '-',

            winrate: '-',
            lossrate: '-',
            drawrate: '-',
            damagerate: '-',
            fragsrate: '-',
            survivedrate: '-',
            spottedrate: '-',
            caprate: '-',
            defrate: '-',
            xprate: '-',
            KD: '-',
            DMGratio: '-',
            tankStats: []
        };
    }
    else {
        stats['winrate'] = (stats.wins*100/stats.battles).toFixed(2);
        stats['lossrate'] = (stats.losses*100/stats.battles).toFixed(2);
        stats['drawrate'] = (stats.draws*100/stats.battles).toFixed(2);
        stats['damagerate'] = (stats.damage/stats.battles).toFixed(0);
        stats['fragsrate'] = (stats.frags/stats.battles).toFixed(2);
        stats['survivedrate'] = (stats.survived*100/stats.battles).toFixed(2);
        stats['spottedrate'] = (stats.spotted/stats.battles).toFixed(2);
        stats['caprate'] = (stats.cap/stats.battles).toFixed(2);
        stats['defrate'] = (stats.def/stats.battles).toFixed(2);
        stats['xprate'] = (stats.xp/stats.battles).toFixed(0);
        stats['tier'] = (stats['tier']/stats.battles).toFixed(2);
        stats['KD'] = (stats.frags/stats.destroyed).toFixed(2);
        stats['DMGratio'] = (stats.damage/stats.damage_received).toFixed(2);
    }
    return stats;
}
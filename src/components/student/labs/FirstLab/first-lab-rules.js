export default class FirstLabRules {
    /**
     * Расчет U для разных труб для вязкостного режима
     */
    static calculatingUViscous(d, l, P1, P2) {
        // Расчет U для длинной трубы
        const Ulong = 1360 * ((d ** 4) / l) * ((P1 + P2) / 2)
        const alpha = P1 / P2
        let Uhole = 0
        if (alpha >= 0.528) {
            Uhole = 602 * d ** 2 * ((alpha ** 0.714) / (1 - alpha))
        } else if (alpha >= 0.1) {
            Uhole = 157 * d ** 2 * (1 / (1 - alpha))
        } else {
            Uhole = 157 * d ** 2
        }
        // Расчет U для короткой трубы
        const Ushort = (Math.sqrt(1 + 0.12 * Ulong * ((P2 - P1) / l)) - 1) / (
                0.06 * ((P2 - P1) / l))
        return this.choosingUViscous(d, l, Ulong, Ushort, Uhole)
    }

    /**
     * Выбор U в зависимости от длины трубы
     */
    static choosingUViscous(l, d, Ulong, Ushort, Uhole) {
        let U = 0;
        if (l / d > 100) {
            U = Ulong
        } else if ( l / d >= 0.1) {
            U = Ushort
        } else {
            U = Uhole
        }
        return U
    }

    /**
     * * Расчет U для разных труб для молекулярного режима
    */
    static calculatingUMolecular(l, d) {
        const Ulong = 121 * d ** 3 / l
        const Uhole = 91 * d ** 2
        const K = 1 / (1 + 0.752 * (l / d))
        const a = (15 * (l / d) + 12 * (l / d) ** 2) / (20 + 38 * (l / d) + 12 * (l / d) ** 2)
        let Ushort = 0;
        if(l / d > 20) {
            Ushort = Uhole * K
        } else  {
            Ushort = Ulong * a
        }
        return this.choosingUViscous(d, l, Ulong, Ushort, Uhole)
    }

    /**
     * Расчет давления в зависимости от насоса
     */
    static calculatingPressure(Pcurr, t, name, S01, S02, V, Qin1, Qin2, d1, l1, d2, l2) {
            if (name === 'forevacuum') {
                return this.calculatingCurrentP(d1, l1, Pcurr, S01, Qin1, V, t).toFixed(3)
            } else if (name === 'turbomolec') {
                return this.calculatingCurrentP(d2, l2, Pcurr, S02, Qin2, V, t).toFixed(3)
            }
    }

    /**
     * Расчет текущего давления
     */
    static calculatingCurrentP(d, l, Pcurr, S, Qin, V, t) {
        const Ucurr = this.calculationUTotal(d, l, 0, Pcurr)
        const Seff = (S * Ucurr) / (S + Ucurr)
        const Pmin = Qin / Seff
        Pcurr = Pmin + (100000 - Pmin) * Math.exp(-0.07 * (Seff / V) * t)
        return Pcurr
    }

    /**
     * Расчет U для разных режимов
     */
    static calculationUTotal(d, l, P1, P2) {
        const Uvisc = this.calculatingUViscous(d, l, P1, P2)
        const pd = ((P1 + P2) / 2) * d
        const Z = (1 + 196 * pd) / (1 + 249 * pd)
        let U = 0
        if (pd >= 0.63) {
            U = Uvisc
        } else if (pd > 6.3 * 10 ** -3) {
            const Umolec = this.calculatingUMolecular(d, l)
            U = Uvisc * Z * Umolec
        } else {
            U = this.calculatingUMolecular(d, l)
        }
        return U
    }
}

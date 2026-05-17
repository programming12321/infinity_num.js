class InfinityNum {

    constructor(
        mantissa = 0,
        exponent = 0,
        layer = 0,
        hyper = 0,
        meta_hyper = 0,
        meta_meta_hyper = 0,
        infinity_hyper = 0
    ) {

        this.m = Number(mantissa)

        this.e = Number(exponent)

        this.l = Number(layer)

        this.h = Number(hyper)

        this.m_h = Number(meta_hyper)

        this.m_m_h = Number(meta_meta_hyper)

        this.i_h = Number(infinity_hyper)

        this.normalize()
    }

    normalize() {

        if (this.m === 0 || isNaN(this.m)) {
            this.m = 0
            this.e = 0
            this.l = 0
            this.h = 0
            return this
        }

        while (Math.abs(this.m) >= 10) {
            this.m /= 10
            this.e += 1
        }

        while (Math.abs(this.m) < 1 && this.m !== 0) {
            this.m *= 10
            this.e -= 1
        }

        if (this.h >= 1e308) {

            this.m_h += 1
            this.h = 0
        }

        if (this.m_h >= 1e308) {

            this.m_m_h += 1
            this.m_h = 0
        }

        if (this.m_m_h >= 1e308) {
            this.i_h += 1

            this.m_m_h = 0
        }

        return this
    }

    clone() {
        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h,
            this.m_h,
            this.m_m_h,
            this.i_h
        )
    }

    add(other) {

        other = InfinityNum.from(other)

        if (this.h > other.h) return this.clone()
        if (other.h > this.h) return other.clone()

        let diff = this.e - other.e

        if (diff > 15) return this.clone()
        if (diff < -15) return other.clone()

        let resultMantissa =
            this.m * Math.pow(10, diff) + other.m

        return new InfinityNum(
            resultMantissa,
            other.e,
            this.l,
            this.h
        )
    }

    mul(other) {

        other = InfinityNum.from(other)

        if (this.h > 0 || other.h > 0) {

            return new InfinityNum(
                this.m,
                this.e,
                this.l,
                Math.max(this.h, other.h)
            )
        }

        return new InfinityNum(
            this.m * other.m,
            this.e + other.e,
            this.l,
            this.h
        )
    }

    pow(power) {

        power = InfinityNum.from(power)

        if (this.h > 0 || power.h > 0) {

            return new InfinityNum(
                this.m,
                this.e,
                this.l,
                Math.max(this.h, power.h) + 1
            )
        }

        let p = power.toNumber()

        return new InfinityNum(
            Math.pow(this.m, p),
            this.e * p,
            this.l,
            this.h
        )
    }

    tetrate(height = 2) {

        if (height <= 1) {
            return this.clone()
        }

        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h + 1
        )
    }

    pentate(height = 2) {

        if (height <= 1) {
            return this.clone()
        }

        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h + 2
        )
    }

    hexate(height = 2) {

        if (height <= 1) {
            return this.clone()
        }

        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h + 3
        )
    }

    hyper(rank = 4, height = 2) {

        if (rank < 4) {
            return this.clone()
        }

        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h + (rank - 3)
        )
    }

    meta_hyper(rank = 4, height = 2) {
        if (height <= 1) {
            return this.clone()
        }

        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h,
            this.m_h + (rank - 3)
        )
    }

    infinity_hyper(rank = 1) {
        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h,
            this.m_h,
            this.m_m_h,
            this.i_h + rank
        )
    }

    toNumber() {

        if (this.h > 0 || this.l > 10) {
            return Infinity
        }

        return this.m * Math.pow(10, this.e)
    }

    tostring() {
        let result = ""

        if (this.i_h > 0) {

            result += "{10, "

            result += this.i_h

            result += ", 10, 10}"

        } else if (this.m_m_h > 0) {

            result += "10{{{"

            result += this.m_m_h

            result += "}}}"

        } else if (this.m_h > 0) {

            result += "10{{"

            result += this.m_h

            result += "}}"

        } else if (this.h > 20) {

            result += "10{"

            result += this.h

            result += "}"

        } else if (this.h > 0) {

            for (let i = 0; i < this.h; i++) {

                result += "10{10}"
            }
        }

        result += this.m.toFixed(3)

        result += "e"

        result += Math.floor(this.e)

        return result
    }

    static from(value) {

        if (value instanceof InfinityNum) {
            return value
        }

        if (value === 0) {
            return new InfinityNum(0, 0, 0, 0)
        }

        let exponent =
            Math.floor(Math.log10(Math.abs(value)))

        let mantissa =
            value / Math.pow(10, exponent)

        return new InfinityNum(
            mantissa,
            exponent,
            0,
            0
        )
    }
}

module.exports = InfinityNum

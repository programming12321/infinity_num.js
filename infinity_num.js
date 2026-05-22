class InfinityNum {

    constructor(
        mantissa = 0,
        exponent = 0,
        layer = 0,
        hyper = 0,
        meta_hyper = 0,
        meta_meta_hyper = 0,
        infinity_hyper = 0,
        omega_hyper = 0,
        beaf_notation_hyper = 0,
        alpha_hyper = 0
    ) {

        this.m = Number(mantissa)

        this.e = Number(exponent)

        this.l = Number(layer)

        this.h = Number(hyper)

        this.m_h = Number(meta_hyper)

        this.m_m_h = Number(meta_meta_hyper)

        this.i_h = Number(infinity_hyper)

        this.o_h = Number(omega_hyper)

        this.b_h = Number(beaf_notation_hyper)

        this.a_h = Number(alpha_hyper)

        this.normalize()
    }

    normalize() {

        if (this.m === 0 || isNaN(this.m)) {

            this.m = 0
            this.e = 0
            this.l = 0

            this.h = 0

            this.m_h = 0

            this.m_m_h = 0

            this.i_h = 0

            this.o_h = 0

            this.b_h = 0

            this.a_h = 0

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

        if (this.i_h >= 1e308) {

            this.o_h += 1
            this.i_h = 0
        }

        if (this.o_h >= 1e308) {

            this.b_h += 1
            this.o_h = 0
        }

        if (this.b_h >= 1e308) {

            this.a_h += 1
            this.b_h = 0
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
            this.i_h,
            this.o_h,
            this.b_h,
            this.a_h
        )
    }

    add(other) {

        other = InfinityNum.from(other)

        if (this.a_h > other.a_h) return this.clone()
        if (other.a_h > this.a_h) return other.clone()

        if (this.b_h > other.b_h) return this.clone()
        if (other.b_h > this.b_h) return other.clone()

        if (this.o_h > other.o_h) return this.clone()
        if (other.o_h > this.o_h) return other.clone()

        if (this.i_h > other.i_h) return this.clone()
        if (other.i_h > this.i_h) return other.clone()

        if (this.m_m_h > other.m_m_h) return this.clone()
        if (other.m_m_h > this.m_m_h) return other.clone()

        if (this.m_h > other.m_h) return this.clone()
        if (other.m_h > this.m_h) return other.clone()

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
            this.h,
            this.m_h,
            this.m_m_h,
            this.i_h,
            this.o_h,
            this.b_h,
            this.a_h
        )
    }

    sub(other) {

        other = InfinityNum.from(other)

        if (this.a_h > other.a_h) return this.clone()
        if (other.a_h > this.a_h) return other.clone()

        if (this.b_h > other.b_h) return this.clone()
        if (other.b_h > this.b_h) return other.clone()

        if (this.o_h > other.o_h) return this.clone()
        if (other.o_h > this.o_h) return other.clone()

        if (this.i_h > other.i_h) return this.clone()
        if (other.i_h > this.i_h) return other.clone()

        if (this.m_m_h > other.m_m_h) return this.clone()
        if (other.m_m_h > this.m_m_h) return other.clone()

        if (this.m_h > other.m_h) return this.clone()
        if (other.m_h > this.m_h) return other.clone()

        if (this.h > other.h) return this.clone()
        if (other.h > this.h) return other.clone()

        let diff = this.e - other.e

        if (diff > 15) return this.clone()
        if (diff < -15) return other.clone()

        let resultMantissa =
            this.m * Math.pow(10, diff) - other.m

        return new InfinityNum(
            resultMantissa,
            other.e,
            this.l,
            this.h,
            this.m_h,
            this.m_m_h,
            this.i_h,
            this.o_h,
            this.b_h,
            this.a_h
        )
    }

    mul(other) {

        other = InfinityNum.from(other)

        if (
            this.h > 0 ||
            this.m_h > 0 ||
            this.m_m_h > 0 ||
            this.i_h > 0 ||
            this.o_h > 0 ||
            this.b_h > 0 ||
            this.a_h > 0
        ) {

            return this.clone()
        }

        return new InfinityNum(
            this.m * other.m,
            this.e + other.e,
            this.l,
            this.h,
            this.m_h,
            this.m_m_h,
            this.i_h,
            this.o_h,
            this.b_h,
            this.a_h
        )
    }

    pow(power) {

        power = InfinityNum.from(power)

        if (
            this.h > 0 ||
            this.m_h > 0 ||
            this.m_m_h > 0 ||
            this.i_h > 0 ||
            this.o_h > 0 ||
            this.b_h > 0 ||
            this.a_h > 0
        ) {

            return new InfinityNum(
                this.m,
                this.e,
                this.l,
                this.h,
                this.m_h,
                this.m_m_h,
                this.i_h,
                this.o_h,
                this.b_h,
                this.a_h + 1
            )
        }

        let p = power.toNumber()

        return new InfinityNum(
            Math.pow(this.m, p),
            this.e * p,
            this.l,
            this.h,
            this.m_h,
            this.m_m_h,
            this.i_h,
            this.o_h,
            this.b_h,
            this.a_h
        )
    }

    alpha_hyper(rank = 1) {

        return new InfinityNum(
            this.m,
            this.e,
            this.l,
            this.h,
            this.m_h,
            this.m_m_h,
            this.i_h,
            this.o_h,
            this.b_h,
            this.a_h + rank
        )
    }

    toNumber() {

        if (
            this.h > 0 ||
            this.m_h > 0 ||
            this.m_m_h > 0 ||
            this.i_h > 0 ||
            this.o_h > 0 ||
            this.b_h > 0 ||
            this.a_h > 0 ||
            this.l > 10
        ) {

            return Infinity
        }

        return this.m * Math.pow(10, this.e)
    }

    tostring() {

        let result = ""

        if (this.a_h >= 10) {
            result += "{10, "

            result += this.a_h

            result += " [1 / 2] 2}"
        } else if (this.a_h > 0) {
            result += "{10, 10 ["

            for (let i = 0; i < this.a_h; i++) {

                result += "1["
            }

            for (let i = 0; i < this.a_h + 1; i++) {

                result += "2]"
            }

            result += " 2}"

        } else if (this.b_h > 0) {

            result += "{10, "

            result += this.o_h

            result += " ["

            result += this.b_h

            result += "] 10}"

        } else if (this.o_h > 20) {

            result += "{10, "

            result += this.o_h

            result += " [2] 2}"

        } else if (this.o_h > 0 && this.o_h < 20) {

            result += "{10, "

            result += this.o_h

            for (let i = 0; i < this.o_h; i++) {

                result += ", 1"
            }

            result += ", 2}"

        } else if (this.i_h > 0) {

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
}

module.exports = InfinityNum

(declare-fun a_s () Real)
(declare-fun b_s () Real)
(assert (not (= (+ (+ a_s b_s) b_s) b_s)) )
(check-sat)
(get-model)
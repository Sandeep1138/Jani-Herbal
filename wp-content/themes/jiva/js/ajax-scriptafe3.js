


jQuery(function (a) {

	function gtag_report_conversion(tag,url) {
		console.log(tag);
	var callback = function () {
	if (typeof(url) != 'undefined') {
	window.location = url;
		}
	  };
	gtag('event', 'conversion', {
		  'send_to': tag,
		  'value': 1.0,
		  'currency': 'INR',
		  'transaction_id': '',
		  'event_callback': callback
	  });
	return false;
	}
	
	a("#state").on("change", function (t) {
		var o = a(this).val();
		if (o) {
			var r = {
				stateid: o,
				action: "wstheme_get_city_data"
			};
			a.post(ajax_object.ajaxurl, r, function (t) {
				t && a("#city").html(t)
			})
		} else a("#city").empty()
	}), a(document).on("click", ".woocommerce-variation-add-to-cart .single_add_to_cart_button", function (t) {
		gtag_report_conversion('AW-710272678/R2UjCJC-zawBEKbN19IC');
		//gtag_report_conversion('AW-813831462/mK1hCIucqKYBEKaqiIQD');
		
		

		fbq('track', 'AddToCart', {
			value: 1,
			currency: 'INR',
		  });
		 
		t.preventDefault();
		var o = a(this),
			r = a(this).closest(".variations_form"),
			i = r.find("input[name=variation_id]").val();
		a(".ajaxerrors").remove();
		var e = {},
			n = !0;
		if (variations = r.find("select[name^=attribute]"), variations.length || (variations = r.find("[name^=attribute]:checked")), variations.length || (variations = r.find("input[name^=attribute]")), variations.each(function () {
				var t, o, r = a(this),
					i = r.attr("name"),
					c = r.val();
				r.removeClass("error"), 0 === c.length ? (t = i.lastIndexOf("_"), o = i.substring(t + 1), r.addClass("required error").before('<div class="ajaxerrors"><p>Please select ' + o + "</p></div>"), n = !1) : e[i] = c
			}), !n) return !1;
		if (o.is(".woocommerce-variation-add-to-cart .single_add_to_cart_button")) {

			if (o.removeClass("added"), o.addClass("loading"), a(this).parents(".variations_form")[0]) var c = {
				action: "bodycommerce_ajax_add_to_cart_woo",
				product_id: r.find("input[name=product_id]").val(),
				quantity: r.find("input[name=quantity]").val(),
				variation_id: i,
				variation: e
			};
			else c = {
				action: "bodycommerce_ajax_add_to_cart_woo_single",
				product_id: a(this).parent().find(".product_id").val(),
				quantity: a(this).parent().find(".qty").val()
			};
			return a("body").trigger("adding_to_cart", [o, c]), a.post(wc_add_to_cart_params.ajax_url, c, function (t) {
				if (t) {
					var r = window.location.toString();
					if (r = r.replace("add-to-cart", "added-to-cart"), t.error && t.product_url) window.location = t.product_url;
					else if ("yes" !== wc_add_to_cart_params.cart_redirect_after_add) {
						o.removeClass("loading");
						var i = t.fragments;
						t.cart_hash;
						i && a.each(i, function (t) {
							a(t).addClass("updating")
						}), a(".shop_table.cart, .updating, .cart_totals").fadeTo("400", "0.6").block({
							message: null,
							overlayCSS: {
								opacity: .6
							}
						}), o.hasClass("disabled") || o.text("Added to cart"), i && a.each(i, function (t, o) {
							a(t).replaceWith(o)
						}), a(".widget_shopping_cart, .updating").stop(!0).css("opacity", "1").unblock(), a(".shop_table.cart").load(r + " .shop_table.cart:eq(0) > *", function () {
							a(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), a(document.body).trigger("cart_page_refreshed")
						}), a(".cart_totals").load(r + " .cart_totals:eq(0) > *", function () {
							a(".cart_totals").stop(!0).css("opacity", "1").unblock()
						})
					} else window.location = wc_add_to_cart_params.cart_url
				}
			}), !1
		}
		return !0
	})
});
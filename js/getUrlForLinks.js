function getUrlForLinks (val) {
	if (val === "Home") {
		return url_for(".");
	} else if (val === "Ripples") {
		return "http://blog.anshulgautam.in";
	} else if (val === "About TechBrunch") {
		return url_for("about");
	} else if (val === "Labels") {
		return url_for("tags");
	} else if (val === "Archives") {
		return url_for("archives");
	}
}
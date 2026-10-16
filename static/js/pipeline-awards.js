(function () {
    var root = document.querySelector("[data-awards]");
    if (!root) {
        return;
    }

    var stage = root.querySelector("[data-awards-stage]");
    var empty = root.querySelector("[data-awards-empty]");
    var panels = root.querySelectorAll("[data-awards-panel]");
    var cards = root.querySelectorAll("[data-awards-open]");

    function panelFor(id) {
        return root.querySelector('[data-awards-panel="' + id + '"]');
    }

    function setVideo(panel, active) {
        var frame = panel.querySelector("iframe");
        if (!frame) {
            return;
        }
        var src = frame.getAttribute("data-src");
        if (active && src && frame.getAttribute("src") !== src) {
            frame.setAttribute("src", src);
        }
        if (!active && frame.hasAttribute("src")) {
            frame.removeAttribute("src");
        }
    }

    function show(id) {
        if (empty) {
            empty.hidden = true;
        }

        panels.forEach(function (panel) {
            var active = panel.getAttribute("data-awards-panel") === id;
            panel.hidden = !active;
            setVideo(panel, active);
        });

        cards.forEach(function (card) {
            var active = card.getAttribute("data-awards-open") === id;
            if (active) {
                card.setAttribute("aria-current", "true");
            } else {
                card.removeAttribute("aria-current");
            }
        });

        if (stage) {
            stage.scrollIntoView({ block: "nearest" });
        }

        var panel = panelFor(id);
        var heading = panel ? panel.querySelector("h3") : null;
        if (heading) {
            heading.focus({ preventScroll: true });
        }
    }

    root.addEventListener("click", function (event) {
        var open = event.target.closest("[data-awards-open]");
        if (open && root.contains(open)) {
            show(open.getAttribute("data-awards-open"));
        }
    });
})();

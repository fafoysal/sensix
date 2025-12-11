// =====================================================
// SENSI X - WEBSITE PROTECTION CODE
// =====================================================
// এই code আপনার site কে সম্পূর্ণ protected রাখবে
// =====================================================

// ==========================================
// 1. RIGHT-CLICK DISABLE (মাউস রাইট ক্লিক বন্ধ)
// ==========================================
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  return false;
});

// ==========================================
// 2. KEYBOARD SHORTCUTS DISABLE (কীবোর্ড শর্টকাট বন্ধ)
// ==========================================
document.addEventListener("keydown", function (e) {
  // Ctrl+C (Copy)
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
    e.preventDefault();

    return false;
  }

  // Ctrl+X (Cut)
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 88) {
    e.preventDefault();

    return false;
  }

  // Ctrl+V (Paste)
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 86) {
    e.preventDefault();

    return false;
  }

  // Ctrl+S (Save)
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
    e.preventDefault();

    return false;
  }

  // F12 (Developer Tools)
  if (e.keyCode === 123) {
    e.preventDefault();

    return false;
  }

  // Ctrl+Shift+I (Inspect)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 73) {
    e.preventDefault();

    return false;
  }

  // Ctrl+Shift+C (Inspect Element)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 67) {
    e.preventDefault();

    return false;
  }

  // Ctrl+Shift+J (Console)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 74) {
    e.preventDefault();

    return false;
  }
});

// ==========================================
// 3. TEXT SELECTION DISABLE (টেক্সট সিলেক্ট বন্ধ)
// ==========================================
document.body.style.userSelect = "none";
document.body.style.webkitUserSelect = "none";
document.body.style.mozUserSelect = "none";
document.body.style.msUserSelect = "none";

// Alternative way
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
  return false;
});

// ==========================================
// 4. DRAG & DROP DISABLE (ড্র্যাগ ড্রপ বন্ধ)
// ==========================================
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
  return false;
});

document.addEventListener("drop", function (e) {
  e.preventDefault();
  return false;
});

// ==========================================
// 5. DEVTOOLS DETECTION (ডেভটুলস খোলা আছে কিনা চেক)
// ==========================================
setInterval(function () {
  if (
    window.outerHeight - window.innerHeight > 100 ||
    window.outerWidth - window.innerWidth > 100
  ) {
    document.body.innerHTML =
      '<h1 style="color:red;text-align:center;margin-top:50px;">⚠️ ACCESS DENIED!</h1>';
  }
}, 500);

// ==========================================
// 6. IFRAME DETECTION (আইফ্রেম থেকে access বন্ধ)
// ==========================================
if (window !== window.top) {
  window.top.location = window.self.location;
}

// ==========================================
// 7. CONSOLE MESSAGE (কনসোল এ মেসেজ)
// ==========================================
console.clear();
console.log(
  "%c⚡ SENSI X - PROTECTED SITE ⚡",
  "color: #00ff88; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cDeveloper: FOYSAL",
  "color: #00ccff; font-size: 14px; font-weight: bold;"
);
console.log(
  "%c⚠️ Code Copying & Inspection Disabled!",
  "color: #ff00ff; font-size: 14px; font-weight: bold;"
);
console.log(
  "%c❌ Unauthorized Access Prohibited!",
  "color: #ff0000; font-size: 14px; font-weight: bold;"
);

// ==========================================
// 8. INSPECT ELEMENT DETECTION
// ==========================================
const check = function () {
  const start = performance.now();
  debugger;
  const end = performance.now();

  if (end - start > 100) {
    alert("⚠️ DevTools Detected! Access Denied!");
    document.body.innerHTML = "";
  }
};

setInterval(check, 1000);

// ==========================================
// 9. PAGE VISIBILITY DETECTION (ট্যাব switch করলে চেক করে)
// ==========================================
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("⚠️ Tab is Hidden");
  } else {
    console.log("✅ Tab is Visible");
  }
});

// ==========================================
// 10. PRINT DISABLE (প্রিন্ট বন্ধ)
// ==========================================
window.addEventListener("beforeprint", function (e) {
  e.preventDefault();
  alert("❌ Printing is Disabled!");
  return false;
});

// ==========================================
// 11. VIEW SOURCE DISABLE
// ==========================================
document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
    // Ctrl+U
    e.preventDefault();

    return false;
  }
});

// ==========================================
// 12. IMAGE SAVE PROTECTION
// ==========================================
document.addEventListener("dragstart", function (e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();

    return false;
  }
});

// ==========================================
// 13. ANTI-HOTLINKING (অন্য সাইট থেকে এক্সেস বন্ধ)
// ==========================================
if (document.referrer.indexOf(window.location.hostname) === -1) {
  // Optional: Redirect to main domain
  // window.location.href = 'https://yourdomain.com';
}

// ==========================================
// 14. WATERMARK IN CONSOLE
// ==========================================
const style = `
    background: linear-gradient(45deg, #00ff88, #00ccff, #ff00ff);
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    border-radius: 10px;
`;

console.log("%c🔒 SENSI X - FULLY PROTECTED 🔒", style);

// ==========================================
// 15. DISABLE COMMON EXTENSIONS
// ==========================================
if (
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ ||
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__
) {
}

// =========================================
// 16. NETWORK REQUEST BLOCKING (Optional)
// =========================================
// এই code DevTools network tab কে block করবে
// const originalFetch = window.fetch;
// window.fetch = function(...args) {
//     if (args[0].includes('devtools') || args[0].includes('debugger')) {
//         alert('❌ Network Request Blocked!');
//         return Promise.reject('Blocked');
//     }
//     return originalFetch.apply(this, args);
// };

// =========================================
// 17. COMPLETE PROTECTION COMBO
// =========================================
(function () {
  // All protections combined
  function protectSite() {
    // Disable all developer tools access methods
    document.oncontextmenu = function () {
      return false;
    };
    document.onkeydown = function (e) {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
        (e.ctrlKey && e.keyCode === 85)
      ) {
        return false;
      }
    };
  }

  protectSite();

  // Run every 500ms
  setInterval(protectSite, 500);
})();

// =========================================
// 18. USER FEEDBACK (Protected Status)
// =========================================
console.log(
  "%c✅ All Protection Systems Active!",
  "color: #00ff88; font-size: 14px; font-weight: bold;"
);
console.log("%c📋 Features Protected:", "color: #00ccff; font-size: 12px;");
console.log("%c  ✓ Right-Click Disabled", "color: #ffffff; font-size: 11px;");
console.log(
  "%c  ✓ Copy/Cut/Paste Disabled",
  "color: #ffffff; font-size: 11px;"
);
console.log("%c  ✓ View Source Disabled", "color: #ffffff; font-size: 11px;");
console.log("%c  ✓ Inspector Disabled", "color: #ffffff; font-size: 11px;");
console.log("%c  ✓ Console Disabled", "color: #ffffff; font-size: 11px;");
console.log("%c  ✓ DevTools Blocked", "color: #ffffff; font-size: 11px;");

// =========================================
// 19. CUSTOM ALERT ON PROTECTION VIOLATION
// =========================================
function showProtectionAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff0000, #ff6600);
        color: white;
        padding: 30px;
        border-radius: 15px;
        z-index: 99999;
        box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
        text-align: center;
        font-weight: bold;
        font-size: 16px;
    `;
  alertBox.textContent = message;
  document.body.appendChild(alertBox);

  setTimeout(() => alertBox.remove(), 3000);
}

// =========================================
// 20. ADVANCED DEVTOOLS DETECTION
// =========================================
(function () {
  let devToolsOpen = false;

  const image = new Image();
  Object.defineProperty(image, "id", {
    get: function () {
      devToolsOpen = true;
      showProtectionAlert("⚠️ DevTools Detected! Access Denied!");
      return "";
    },
  });

  console.log(image);
})();

// =========================================
// HTML এ ADD করার জন্য CSS
// =========================================
const protectionCSS = `
    <style>
        /* User Selection Disable */
        * {
            user-select: none !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            -o-user-select: none !important;
        }
        
        /* Prevent Drag & Drop */
        img, a {
            pointer-events: none;
            user-select: none;
            -webkit-user-drag: none;
        }
        
        /* Protect Text */
        body {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    </style>
`;

// =========================================
// কোন file এ এই code add করবেন?
// =========================================
//
// Option 1: <head> tag এ internal script হিসেবে
// <script>
//     // সব code এখানে paste করুন
// </script>
//
// Option 2: External JS file হিসেবে
// <script src="protection.js"></script>
//
// Option 3: Minified version ব্যবহার করুন
// <script src="protection.min.js"></script>
//
// =========================================

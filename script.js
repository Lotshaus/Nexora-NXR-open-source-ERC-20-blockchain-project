const contractAddress =
    "0x8B9F2eE3570D0b7d9c607ED6B3Ff13ab00F3638D";

function copyContract(button) {
    navigator.clipboard.writeText(contractAddress);

    const originalText = button.textContent;
    button.textContent = "Copied!";

    setTimeout(() => {
        button.textContent = originalText;
    }, 1500);
}

const copyButton = document.getElementById("copyContract");
const copyButton2 = document.getElementById("copyContract2");

if (copyButton) {
    copyButton.addEventListener("click", () => {
        copyContract(copyButton);
    });
}

if (copyButton2) {
    copyButton2.addEventListener("click", () => {
        copyContract(copyButton2);
    });
}

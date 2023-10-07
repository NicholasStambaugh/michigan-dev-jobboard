function Footer() {
    return (
        <footer className="flex h-[10vh] max-w-5xl mx-auto items-center justify-between border-t">
            <div className="flex items-center justify-center gap-4">
                <a href="#">Terms</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="flex items-center justify-center gap-4">
                <a href="#"><svg>...</svg></a>
                <a href="#"><svg>...</svg></a>
                <a href="#"><svg>...</svg></a>
            </div>
            <div className="flex items-center justify-center gap-4">
                <a href="#">miDev</a>
            </div>
        </footer>
    );
}

export default Footer;

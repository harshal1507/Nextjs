export default function ProfileLayout({children}){
    return(
        <div>
            <h1>This is profile header from profile layout</h1>
            {children}
            <h1>This is profile footer from profile layout</h1>
        </div>
    );
}
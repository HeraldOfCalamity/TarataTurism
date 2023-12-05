export default function UserPlan ({plan_name, cost, desc}) {
    return(
        <div className="mb-2 border border-emerald-900 rounded p-2 bg-slate-700/95">
            <h4 className="text-gray-300">{plan_name}</h4>
            <p className="text-gray-300">{desc}</p>
            <hr />
            <span className="text-gray-300">{cost}</span>
        </div>
    )
}
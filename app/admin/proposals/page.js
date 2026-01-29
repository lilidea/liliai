"use client";
import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, Calendar, Mail, Phone, Building } from 'lucide-react';

export default function ProposalsPage() {
    const [proposals, setProposals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProposals();
    }, []);

    const fetchProposals = async () => {
        try {
            const res = await fetch('/api/proposals');
            const json = await res.json();
            if (json.success) {
                setProposals(json.data);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    const downloadJson = (data, filename) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    if (isLoading) return <div className="p-8">Yükleniyor...</div>;

    return (
        <div className="p-8 w-full mx-auto">
            <h1 className="text-3xl font-bold mb-8">Gelen Teklifler</h1>

            <div className="grid gap-8">
                {proposals.map(proposal => (
                    <div key={proposal.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 flex flex-col md:flex-row gap-8 transition-all hover:shadow-md">

                        {/* Info */}
                        <div className="flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900">{proposal.companyName}</h3>
                                    <div className="text-sm text-neutral-500 mt-1 flex items-center gap-2">
                                        <Calendar size={14} />
                                        {new Date(proposal.createdAt).toLocaleString('tr-TR')}
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {proposal.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Building size={16} className="text-neutral-400" />
                                    <span className="font-semibold">{proposal.contactName}</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Mail size={16} className="text-neutral-400" />
                                    <a href={`mailto:${proposal.email}`} className="hover:text-blue-600">{proposal.email}</a>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Phone size={16} className="text-neutral-400" />
                                    <a href={`tel:${proposal.phone}`} className="hover:text-blue-600">{proposal.phone}</a>
                                </div>
                            </div>

                            {(proposal.budget || proposal.timeline) && (
                                <div className="bg-neutral-50 p-3 rounded-lg text-sm grid grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <span className="text-neutral-400 text-xs uppercase block">Bütçe</span>
                                        <span className="font-medium">{proposal.budget || '-'}</span>
                                    </div>
                                    <div>
                                        <span className="text-neutral-400 text-xs uppercase block">Süreç</span>
                                        <span className="font-medium">{proposal.timeline || '-'}</span>
                                    </div>
                                </div>
                            )}

                            {proposal.notes && (
                                <div className="text-sm text-neutral-600 bg-neutral-50 p-3 rounded-lg">
                                    <span className="text-neutral-400 text-xs uppercase block mb-1">Notlar</span>
                                    {proposal.notes}
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex md:flex-col gap-2 shrink-0 border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-6 justify-center">
                            <button
                                onClick={() => downloadJson(proposal.siteData, `proposal-${proposal.id}.json`)}
                                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-bold hover:bg-black transition-colors"
                            >
                                <Download size={16} /> JSON İndir
                            </button>
                            <button
                                onClick={() => {
                                    // In a real app, this would open the preview with the loaded config
                                    alert("Bu özellik yakında eklenecek: Tasarımı Önizle");
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-bold hover:bg-neutral-50 transition-colors"
                            >
                                <ExternalLink size={16} /> Tasarımı Aç
                            </button>
                        </div>

                    </div>
                ))}

                {proposals.length === 0 && (
                    <div className="text-center py-12 text-neutral-400">
                        Henüz teklif yok.
                    </div>
                )}
            </div>
        </div>
    );
}

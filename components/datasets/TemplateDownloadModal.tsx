'use client'

import React from 'react';
import { X, FileSpreadsheet } from 'lucide-react';
import { TemplateOption } from '@/types/dataset';

interface TemplateDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  templates: TemplateOption[];
  onDownloadTemplate: (templateId: string) => void;
}

const TemplateDownloadModal: React.FC<TemplateDownloadModalProps> = ({
  isOpen,
  onClose,
  templates,
  onDownloadTemplate
}) => {
  if (!isOpen) return null;

  const getIconColor = (color: TemplateOption['icon']) => {
    const colors = {
      emerald: 'text-emerald-400',
      blue: 'text-blue-400',
      amber: 'text-amber-400'
    };
    return colors[color];
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Download Dataset Template</h3>
          <button 
            className="text-zinc-400 hover:text-white"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-zinc-400 mb-6">
          Choose a template format to help you structure your data for optimal model training.
        </p>
        
        <div className="space-y-4">
          {templates.map((template) => (
            <div 
              key={template.id}
              className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-4 hover:border-violet-600/50 cursor-pointer transition-colors"
              onClick={() => onDownloadTemplate(template.id)}
            >
              <div className="flex items-center">
                <FileSpreadsheet className={`h-6 w-6 ${getIconColor(template.icon)} mr-3`} />
                <div>
                  <h4 className="text-white text-sm font-medium">{template.name}</h4>
                  <p className="text-xs text-zinc-500">{template.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button 
            className="text-zinc-400 hover:text-white text-sm mr-4"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-4 py-2 text-sm font-medium"
            onClick={onClose}
          >
            Download Selected Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateDownloadModal;